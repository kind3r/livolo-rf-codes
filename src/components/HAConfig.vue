<template>
  <div class="container border border-top-0 p-2">
    <h2><span class="badge badge-info">2</span> Home Assistant configuration</h2>
    <div class="alert alert-primary border border-primary">
      <h5><span class="badge badge-pill badge-success">1</span> Setup Broadlink remote: 
        <a href="https://www.home-assistant.io/integrations/broadlink/" target="_blank">https://www.home-assistant.io/integrations/broadlink/</a>
      </h5>
      <!-- <p>Store your Broadlink remote IP and MAC address in <code>secrets.yaml</code> file:</p>
      <Prism language="yaml">{{secrets}}</Prism>
      <p>Store remote configuration in a <a href="https://www.home-assistant.io/docs/configuration/packages/" target="_blank">package</a> 
        or in your main <code>configuration.yaml</code> file:
      </p>
      <Prism language="yaml">{{remote}}</Prism> -->
    </div>
    <div class="alert alert-primary border border-primary">
      <h5><span class="badge badge-pill badge-success">2</span>
        Add the configuration for the lights in a new <a href="https://www.home-assistant.io/docs/configuration/packages/" target="_blank">package</a> 
        or in your main <code>configuration.yaml</code> file:
      </h5>
      <Prism language="yaml">{{script}}</Prism>
    </div>
    <div class="alert alert-primary">
      <h5><span class="badge badge-pill badge-success">3</span>
        Restart your HA server and check under <b>Configuration</b> &gt; <b>Scripts</b> that the following new scripts are present:
      </h5>
      <ul>
        <li v-for="(s,i) in scripts" :key="i"><b>{{s}}</b></li>
      </ul>
    </div>
    <div class="alert alert-primary">
      <h5><span class="badge badge-pill badge-success">4</span>
        <span class="badge badge-secondary">Optional</span> Add a simple <code>glance</code> card to the Lovelace UI to monitor the state of the lights: 
      </h5>
      <Prism language="yaml">{{lovelace}}</Prism>
    </div>
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
  props: ["value", "options"],
  data: function() {
    return {
    };
  },
  computed: {
    secrets() {
      return `# Broadlink universal remote
broadlink_ip: 192.168.x.x
broadlink_mac: C8:F7:42:XX:XX:XX`;
    },
    remote() {
      return `remote:
  - platform: broadlink
    host: !secret broadlink_ip
    mac: !secret broadlink_mac
    timeout: 30

# switch is required to be able to use broadlink.send service
switch:
  - platform: broadlink
    host: !secret broadlink_ip
    mac: !secret broadlink_mac
    timeout: 30`;
    },
    script() {
      var lightEntities = [];
      var lights = {};
      var script = {};
      var input_boolean = {};
      var remoteId = null;
      var remote;
      if (window.localStorage) {
        remoteId = parseInt(localStorage.getItem("livolo-rf-codes.remoteId"));
        // patch to update the remote id in case an invalid one is stored
        if(!Broadlink.idIsValid(remoteId)) {
          var tempRemote = new Broadlink();
          remoteId = tempRemote.id;
          localStorage.setItem("livolo-rf-codes.remoteId", remoteId);
        }
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
          var togglePacket;
          if(sw.dimmer == true) {
            togglePacket = remote.getButtonCode(Broadlink.buttons.btn1, this.options.remote_model, 128);
          } else {
            togglePacket = remote.getButtonCode(Broadlink.buttons.btn10, this.options.remote_model, 128);
          }
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
          lightEntities.push("light." + id);
          script[id + "_toggle"] = {
            alias: sw.names[i] + " TOGGLE",
            sequence: [
              {
                service: "remote.send_command",
                target: {
                  entity_id: this.options.entity_id,
                },
                data: {
                  command: "b64:" + togglePacket
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
                service: "remote.send_command",
                target: {
                  entity_id: this.options.entity_id,
                },
                data: {
                  command: "b64:" + remote.getButtonCode(Broadlink.buttons.scn1, this.options.remote_model)
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
                service: "remote.send_command",
                target: {
                  entity_id: this.options.entity_id,
                },
                data: {
                  command: "b64:" + remote.getButtonCode(Broadlink.buttons.scn2, this.options.remote_model)
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
          if(sw.dimmer) {
            remote.incrementId(true);
            script[id + "_dim_toggle"] = {
              alias: sw.names[i] + " DIM LEARN",
              sequence: [
                {
                  service: "remote.send_command",
                  target: {
                    entity_id: this.options.entity_id,
                  },
                  data: {
                    command: "b64:" + remote.getButtonCode(Broadlink.buttons.dimToggle, this.options.remote_model, 128)
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
            script[id + "_dim_up"] = {
              alias: sw.names[i] + " DIM +",
              sequence: [
                {
                  service: "remote.send_command",
                  target: {
                    entity_id: this.options.entity_id,
                  },
                  data: {
                    command: "b64:" + remote.getButtonCode(Broadlink.buttons.dimUp, this.options.remote_model, 64)
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
            script[id + "_dim_down"] = {
              alias: sw.names[i] + " DIM -",
              sequence: [
                {
                  service: "remote.send_command",
                  target: {
                    entity_id: this.options.entity_id,
                  },
                  data: {
                    command: "b64:" + remote.getButtonCode(Broadlink.buttons.dimDown, this.options.remote_model, 64)
                  }
                }
              ]
            }
          }
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
          },
          {
            platform: "group",
            name: "All Livolo lights",
            entities: lightEntities
          }
        ],
        script: script,
        input_boolean: input_boolean
      });
    },
    scripts() {
      var scripts = [];
      this.value.forEach(sw => {
        for (var i = 0; i < sw.type; i++) {
          scripts.push(sw.names[i] + " TOGGLE");
          scripts.push(sw.names[i] + " ON");
          scripts.push(sw.names[i] + " OFF");
        }
      });
      return scripts;
    },
    lovelace() {
      var card = {
        type: 'glance',
        entities: []
      };
      this.value.forEach(sw => {
        for (var i = 0; i < sw.type; i++) {
          card.entities.push({
            entity: 'light.' + sw.names[i].toLowerCase().replace(/[^a-z0-9]/g, "_"),
            name: sw.names[i]
          });
        }
      });
      return YAML.stringify(card);
    }
  }
};
</script>