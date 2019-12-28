<template>
  <div class="container border border-top-0 p-2">
    <h2><span class="badge badge-info">2</span> Home Assistant configuration</h2>
    <div class="alert alert-primary">
      test
    </div>
    <p>Provide instructions on how to install HA config (secrets, packages etc.)</p>
    <Prism language="yaml">{{script}}</Prism>
  </div>
</template>
<script>
import Broadlink from "../broadlink";
import YAML from "yaml";

class Secret {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

const secret = {
  identify(value) {
    return value instanceof Secret;
  },
  tag: "!secret",
  resolve(doc, cst) {
    return new Secret(cst.strValue);
  }
};
YAML.defaultOptions.customTags = [secret];

export default {
  props: ["value"],
  data: function() {
    return {
    };
  },
  computed: {
    script() {
      var lights = {};
      var script = {};
      var input_boolean = {};
      var remoteId = null;
      var remote;
      if (window.localStorage) {
        remoteId = parseInt(localStorage.getItem("livolo-rf-codes.remoteId"));
      }
      if (remoteId) {
        remote = new Broadlink(remoteId);
      } else {
        remote = new Broadlink();
        if (window.localStorage) {
          localStorage.setItem("livolo-rf-codes.remoteId", remote.id);
        }
      }
      this.value.forEach(sw => {
        for (var i = 0; i < sw.type; i++) {
          const id = sw.names[i].toLowerCase().replace(/[^a-z0-9]/g, "_");
          lights[id] = {
            friendly_name: sw.names[i],
            value_template: "{{ is_state('input_boolean." + id + "', 'on') }}",
            turn_on: {
              service: "script." + id + "_on"
            },
            turn_off: {
              service: "script." + id + "_off"
            }
          };
          script[id + "_toggle"] = {
            alias: sw.names[i] + " TOGGLE",
            sequence: [
              {
                service: "broadlink.send",
                data: {
                  host: new Secret("broadlink_ip"),
                  packet: [remote.getButtonCode(Broadlink.buttons.btn10)]
                }
              },
              {
                service: "input_boolean.toggle",
                data: {
                  entity_id: "input_boolean." + id
                }
              }
            ]
          };
          script[id + "_on"] = {
            alias: sw.names[i] + " ON",
            sequence: [
              {
                service: "broadlink.send",
                data: {
                  host: new Secret("broadlink_ip"),
                  packet: [remote.getButtonCode(Broadlink.buttons.scn1)]
                }
              },
              {
                service: "input_boolean.turn_on",
                data: {
                  entity_id: "input_boolean." + id
                }
              }
            ]
          };
          script[id + "_off"] = {
            alias: sw.names[i] + " OFF",
            sequence: [
              {
                service: "broadlink.send",
                data: {
                  host: new Secret("broadlink_ip"),
                  packet: [remote.getButtonCode(Broadlink.buttons.scn2)]
                }
              },
              {
                service: "input_boolean.turn_off",
                data: {
                  entity_id: "input_boolean." + id
                }
              }
            ]
          };
          input_boolean[id] = {
            name: sw.names[i],
            icon: "mdi:light-switch"
          };
          remote.incrementId();
        }
      });
      return YAML.stringify({
        light: [
          {
            platform: "template",
            lights: lights
          }
        ],
        script: script,
        input_boolean: input_boolean
      });
    }
  }
};
</script>