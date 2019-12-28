<template>
  <div class="container border border-top-0 p-2">
    <h2><span class="badge badge-info">1</span> Add switches</h2>
    <div class="alert alert-primary">
      Add as many switches as you need, for each gang of every switch a new remote id will be generated. This will allow asinging each gang a remote button and 2 scenes (one for on and one for off).
    </div>
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
                class="btn btn-info w-100"
                v-on:click="addSwitch(1)"
              >One gang</a>
            </p>
            <p class="w-100">
              <a
                href="javascript:void(0)"
                class="btn btn-info w-100"
                v-on:click="addSwitch(2)"
              >Two gang</a>
            </p>
            <p class="w-100">
              <a
                href="javascript:void(0)"
                class="btn btn-info w-100"
                v-on:click="addSwitch(3)"
              >Three gang</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LivoloSwitch from "./LivoloSwitch";
export default {
  props: ['value'],
  components: {
    LivoloSwitch
  },
  data: function() {
    return {
      switches: this.value,
      switchIndex: 0
    }
  },
  methods: {
    addSwitch(type) {
      this.switchIndex++;
      this.switches.push({
        switchIndex: this.switchIndex,
        name: "Livolo Switch " + this.switchIndex,
        names: [
          "Switch " + this.switchIndex + " gang 1",
          "Switch " + this.switchIndex + " gang 2",
          "Switch " + this.switchIndex + " gang 3"
        ],
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
  },
  watch: {
    switches(newVal) {
      this.$emit('input', newVal);
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
}
</script>