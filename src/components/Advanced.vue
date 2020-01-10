<template>
  <div class="container border border-top-0 p-2">
    <div class="alert alert-primary">In case the generated base remote id does not work, 
      you can generate a new one or specify one manually. 
      <b>This will reset all the codes for all the switches.</b>
    </div>
    <div class="form-inline mb-5">
      <label for="newId" class="my-1 mr-2">Remote base ID</label>
      <input id="newId" type="number" class="form-control" :class="{'is-invalid': !valid}" v-model="newId">
      <a href="javascript:void(0)" class="btn btn-primary m-2" :class="{disabled: !valid}" v-on:click="updateId">Update</a>
      <a href="javascript:void(0)" class="btn btn-info" v-on:click="regenerateId">Regenerate</a>
    </div>
    <div class="alert alert-primary">Save and restore your switch settings</div>
    <div class="row text-center">
      <div class="col">
        <a href="javascript:void(0)" class="btn btn-primary" v-on:click="saveConfig">Download</a>
      </div>
      <div class="col">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customConfigFile" ref="customConfigFile" v-on:change="loadConfig">
          <label class="custom-file-label" for="customConfigFile" data-browse="Restore">{{configUploadName}}</label>
        </div>
        <div class="alert alert-danger mt-2 p-1" v-if="configUploadError != null">{{configUploadError}}</div>
        <div class="alert alert-success mt-2 p-1" v-if="configUploadSuccess != null">Configuration restored</div>
      </div>
    </div>
  </div>
</template>
<script>
import Broadlink from "../broadlink";

export default {
  data: function() {
    return {
      newId: this.remoteId,
      configUploadName: "Choose configuration file",
      configUploadError: null,
      configUploadSuccess: null
    }
  },
  computed: {
    remoteId() {
      if (window.localStorage) {
        return parseInt(localStorage.getItem("livolo-rf-codes.remoteId"));
      }
      return null;
    },
    switches() {
      if(window.localStorage) {
        return JSON.parse(localStorage.getItem("livolo-rf-codes.switches"));
      }
      return null;
    },
    switchIndex() {
      if(window.localStorage) {
        return localStorage.getItem("livolo-rf-codes.switchIndex");
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
    },
    saveConfig() {
      const settings = {
        remoteId: this.remoteId,
        switches: this.switches,
        switchIndex: this.switchIndex
      }
      const data = JSON.stringify(settings);
      const blob = new Blob([data], {type: 'text/plain'});
      const e = document.createEvent('MouseEvents');
      const a = document.createElement('a');
      a.download = "livolo-rf-codes-config.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },
    async loadConfig() {
      this.configUploadError = null;
      this.configUploadSuccess = null;
      if(this.$refs.customConfigFile.files && this.$refs.customConfigFile.files.length == 1) {
        const file = this.$refs.customConfigFile.files[0];
        this.configUploadName = file.name;
        if(file.type && file.type != 'application/json') {
          this.configUploadError = "Invalid file type";
          return false;
        }
        try {
          const config = await file.text();
          try {
            const configJSON = JSON.parse(config);
            if(configJSON.remoteId && configJSON.switches && configJSON.switchIndex) {
              var response = confirm("Are you sure you want to overwrite your current configuration ?");
              if(response == true && window.localStorage) {
                localStorage.setItem("livolo-rf-codes.remoteId", parseInt(configJSON.remoteId));
                localStorage.setItem("livolo-rf-codes.switchIndex", parseInt(configJSON.switchIndex));
                localStorage.setItem("livolo-rf-codes.switches", JSON.stringify(configJSON.switches));
                this.configUploadSuccess = true;
                this.$emit('reloadStorage');
              } else {
                this.$refs.customConfigFile.value = '';
                this.configUploadName = "Choose configuration file";
              }
            } else {
              this.configUploadError = "Invalid configuration file structure";
              return false;
            }
          } catch (error) {
            console.log('Error parsing config', error);
            this.configUploadError = "Error parsing configuration file";
            return false;
          }
        } catch (error) {
          console.log('Error loading config', error);
          this.configUploadError = "Error loading configuration file";
          return false;
        }
      }
    }
  },
  mounted() {
    this.newId = this.remoteId;
  }
}
</script>