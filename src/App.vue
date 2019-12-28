<template>
  <div id="app" class="container">
    <h1>Generate Home Assistant configuration for Livolo RF switches used via Broadlink RM 2/RM Pro/RM Plus remote</h1>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" :class="{active: step==1, disabled: switches.length == 0}" href="javascript:void(0)" v-on:click="switchStep(1)">Add switches</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{active: step==2, disabled: switches.length == 0}" href="javascript:void(0)" v-on:click="switchStep(2)">HA package</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{active: step==3, disabled: switches.length == 0}" href="javascript:void(0)" v-on:click="switchStep(3)">Setup</a>
      </li>
    </ul>
    <Switches v-model="switches" v-if="step==1"></Switches>
    <HAConfig v-model="switches" v-if="step==2"></HAConfig>
  </div>
</template>

<script>
import Switches from "./components/Switches";
import HAConfig from "./components/HAConfig";

export default {
  name: "app",
  components: {
    Switches,
    HAConfig
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
    }
  }
};
</script>

