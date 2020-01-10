<template>
  <div id="app">
    <div class="container">
      <h1>Generate Home Assistant configuration for Livolo RF switches used via Broadlink RM 2/RM Pro/RM Plus remote</h1>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" :class="{active: step==1}" href="javascript:void(0)" v-on:click="switchStep(1)">
            <span class="badge badge-info">1</span> Add switches</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{active: step==2, disabled: switches.length == 0}" href="javascript:void(0)" v-on:click="switchStep(2)">
            <span class="badge badge-info">2</span> HA config</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{active: step==3, disabled: switches.length == 0}" href="javascript:void(0)" v-on:click="switchStep(3)">
            <span class="badge badge-info">3</span> Pairing switches</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{active: step==4}" href="javascript:void(0)" v-on:click="switchStep(4)">Advanced</a>
        </li>
      </ul>
      <Switches v-model="switches" v-if="step==1"></Switches>
      <HAConfig v-model="switches" v-show="step==2"></HAConfig>
      <Pairing v-model="switches" v-if="step==3"></Pairing>
      <Advanced v-if="step==4" v-on:reloadStorage="reloadStorage"></Advanced>
    </div>
    <footer class="container-fluid mt-3 mb-5 row">
      <div class="col">
        Inspired by <a href="https://www.tyjtyj.com/livolo.php" target="_blank">https://www.tyjtyj.com/livolo.php</a><br>
        Thread on <a href="https://community.home-assistant.io/t/broadlink-rm-pro-livolo-switches-rf-learning-woes/12432" target="_blank">Home Assistant comunity</a>
      </div>
      <div class="col text-right">
        <a href="https://github.com/kind3r/livolo-rf-codes" target="_blank">
          <img src="./assets/GitHub-Mark-64px.png">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Switches from "./components/Switches";
import HAConfig from "./components/HAConfig";
import Pairing from "./components/Pairing";
import Advanced from "./components/Advanced";

export default {
  name: "app",
  components: {
    Switches,
    HAConfig,
    Pairing,
    Advanced
  },
  data: function() {
    return {
      switches: [],
      step: 1
    };
  },
  methods: {
    switchStep(step) {
      this.step = step;
    },
    reloadStorage() {
      this.step = 1;
    }
  }
};
</script>

