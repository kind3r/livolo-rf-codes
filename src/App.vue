<template>
  <div id="app" class="container">
    <h1>Generate Home Assistant configuration for Livolo RF switches used via Broadlink RM 2/RM Pro/RM Plus remote</h1>
    <div class="container border">
      <h2>Step 1 - Add switches</h2>
      <div class="row">
        <div class="col-lg-4" v-for="(sw,index) in switches" :key="switches[index].switchIndex">
          <LivoloSwitch
            :index="index"
            v-model="switches[index]"
            v-on:remove="removeSwitch"
            @input="storeSwitches"
          ></LivoloSwitch>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="card-header">Add switch</div>
            <div class="card-body">
              <h5 class="card-title">Choose a type</h5>
              <p class="w-100">
                <a
                  href="javascript:void(0)"
                  class="btn btn-primary w-100"
                  v-on:click="addSwitch(1)"
                >One gang</a>
              </p>
              <p class="w-100">
                <a
                  href="javascript:void(0)"
                  class="btn btn-primary w-100"
                  v-on:click="addSwitch(2)"
                >Two gang</a>
              </p>
              <p class="w-100">
                <a
                  href="javascript:void(0)"
                  class="btn btn-primary w-100"
                  v-on:click="addSwitch(3)"
                >Three gang</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="javascript:void(0)" v-on:click="incrementId">increment</a>
    <div class="container border">
      <h2>Step 2 - HA package</h2>
      <codemirror :value="script" :options="{ mode: 'text/x-yaml', readOnly: true, lineNumbers: true, line: true}"></codemirror>
    </div>
  </div>
</template>

<script>
import LivoloSwitch from "./components/LivoloSwitch";
import Broadlink from "./broadlink";
import YAML from 'yaml';
import 'codemirror/mode/yaml/yaml';

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
  tag: '!secret',
  resolve(doc, cst) {
    return new Secret(cst.strValue);
  },
}
YAML.defaultOptions.customTags = [secret];

export default {
  name: "app",
  components: {
    LivoloSwitch
  },
  data: function() {
    return {
      switches: [],
      switchIndex: 0,
      remoteId: 0,
      remote: new Broadlink({ id: 7400 })
    };
  },
  computed: {
    testBtn() {
      return this.remote.getButtonCode(Broadlink.buttons.btn1);
    },
    script() {
      var lights = {}
      var script = {};
      var input_boolean = {};
      const remote = new Broadlink({ id: 7400 });
      this.switches.forEach((sw) => {
        const id = sw.name.toLowerCase().replace(/[^a-z0-9]/g,'_');
        for(var i = 0; i < sw.type; i++) {
          lights[id + '_' + (i+1)] = {
            friendly_name: sw.name,
            value_template: "{{ is_state('input_boolean." + id + '_' + (i+1) + "', 'on') }}",
            turn_on: {
              service: 'script.' + id + '_' + (i+1) + '_on'
            },
            turn_off: {
              service: 'script.' + id + '_' + (i+1) + '_off'
            },
          };
          script[id + '_' + (i+1) + '_toggle'] = {
            alias: sw.name + ' TOGGLE',
            sequence: [
              { 
                service: 'broadlink.send',
                data: {
                  host: new Secret('broadlink_ip'),
                  packet: [
                    remote.getButtonCode(Broadlink.buttons.btn10)
                  ]
                }
              },
              {
                service: 'input_boolean.toggle',
                data: {
                  entity_id: 'input_boolean.' + id + '_' + (i+1)
                }
              }
            ]
          };
          script[id + '_' + (i+1) + '_on'] = {
            alias: sw.name + ' ON',
            sequence: [
              { 
                service: 'broadlink.send',
                data: {
                  host: new Secret('broadlink_ip'),
                  packet: [
                    remote.getButtonCode(Broadlink.buttons.scn1)
                  ]
                }
              },
              {
                service: 'input_boolean.turn_on',
                data: {
                  entity_id: 'input_boolean.' + id + '_' + (i+1)
                }
              }
            ]
          };
          script[id + '_' + (i+1) + '_off'] = {
            alias: sw.name + ' OFF',
            sequence: [
              { 
                service: 'broadlink.send',
                data: {
                  host: new Secret('broadlink_ip'),
                  packet: [
                    remote.getButtonCode(Broadlink.buttons.scn2)
                  ]
                }
              },
              {
                service: 'input_boolean.turn_off',
                data: {
                  entity_id: 'input_boolean.' + id + '_' + (i+1)
                }
              }
            ]
          };
          input_boolean[id + '_' + (i+1)] = {
            name: sw.name,
            icon: 'mdi:light-switch'
          }
          remote.incrementId();
        }
      });
      return YAML.stringify({
        light: [
          {
            platform: 'template',
            lights: lights
          }
        ],
        script: script,
        input_boolean: input_boolean
      });
    }
  },
  methods: {
    addSwitch(type) {
      this.switchIndex++;
      this.switches.push({
        switchIndex: this.switchIndex,
        name: "Livolo Switch " + this.switchIndex,
        type: type
      });
      this.storeSwitches();
    },
    removeSwitch(index) {
      this.switches.splice(index, 1);
      this.storeSwitches();
    },
    storeSwitches() {
      if (window.localStorage) {
        localStorage.setItem(
          "livolo-rf-codes.switches",
          JSON.stringify(this.switches)
        );
        localStorage.setItem("livolo-rf-codes.switchIndex", this.switchIndex);
      }
    },
    incrementId() {
      this.remote.incrementId();
    }
  },
  mounted: function() {
    // load switches from local storage
    if (window.localStorage) {
      const switches = localStorage.getItem("livolo-rf-codes.switches");
      if (switches) {
        this.switches = JSON.parse(switches);
      }
      const switchIndex = localStorage.getItem("livolo-rf-codes.switchIndex");
      if (switchIndex) {
        this.switchIndex = switchIndex;
      }
    }
  }
};
</script>

