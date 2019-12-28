<template>
  <div class="container border border-top-0 p-2">
    <div class="alert alert-primary">In case the generated base remote id does not work, 
      you can generate a new one or specift one manually. 
      <b>This will reset all the codes for all the switches.</b>
    </div>
    <div class="form-inline">
      <label for="newId" class="my-1 mr-2">Remote base ID</label>
      <input id="newId" type="number" class="form-control" :class="{'is-invalid': !valid}" v-model="newId">
      <a href="javascript:void(0)" class="btn btn-primary m-2" :class="{disabled: !valid}" v-on:click="updateId">Update</a>
      <a href="javascript:void(0)" class="btn btn-info" v-on:click="regenerateId">Regenerate</a>
    </div>
  </div>
</template>
<script>
import Broadlink from "../broadlink";

export default {
  data: function() {
    return {
      newId: this.remoteId
    }
  },
  computed: {
    remoteId() {
      if (window.localStorage) {
        return parseInt(localStorage.getItem("livolo-rf-codes.remoteId"));
      }
      return null;
    },
    valid() {
      return Broadlink.idIsValid(parseInt(this.newId));
    }
  },
  methods: {
    updateId() {
      if(window.localStorage && this.valid) {
        localStorage.setItem("livolo-rf-codes.remoteId", parseInt(this.newId));
      }
    },
    regenerateId() {
      const remote = new Broadlink();
      this.newId = remote.id;
      this.updateId();
    }
  },
  mounted() {
    this.newId = this.remoteId;
  }
}
</script>