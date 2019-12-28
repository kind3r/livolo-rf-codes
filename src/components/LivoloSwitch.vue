<template>
  <div class="card">
    <img src="../assets/livolo1.jpg" class="card-img-top" alt="One gang switch" v-if="type == 1">
    <img src="../assets/livolo2.jpg" class="card-img-top" alt="Two gang switch" v-if="type == 2">
    <img src="../assets/livolo3.jpg" class="card-img-top" alt="Three gang switch" v-if="type == 3">
    <div class="card-body">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Gang 1</span>
        </div>
        <input type="text" class="form-control" aria-describedby="basic-addon3" v-model="names[0]" @input="updateModel">
      </div>
      <div class="input-group mb-3" v-if="type >= 2">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Gang 2</span>
        </div>
        <input type="text" class="form-control" aria-describedby="basic-addon3" v-model="names[1]" @input="updateModel">
      </div>
      <div class="input-group mb-3" v-if="type >= 3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Gang 3</span>
        </div>
        <input type="text" class="form-control" aria-describedby="basic-addon3" v-model="names[2]" @input="updateModel">
      </div>
      <select class="form-control" v-model="type" @change="updateModel">
        <option value="1">One gang</option>
        <option value="2">Two gang</option>
        <option value="3">Three gang</option>
      </select>
      <p>&nbsp;</p>
      <a href="javascript:void(0)" class="card-link" v-on:click="removeSwitch">Remove</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index', 'value'],
  name: 'LivoloSwitch',
  data: function() {
    return {
      switchIndex: this.value.switchIndex,
      name: this.value.name,
      names: this.value.names,
      type: this.value.type
    }
  },
  computed: {
    id() {
      return this.name.toLowerCase().replace(/[^a-z0-9]/g,'_');
    }
  },
  methods: {
    updateModel() {
      this.$emit('input', {
        switchIndex: this.switchIndex,
        name: this.name,
        names: this.names,
        type: parseInt(this.type),
      });
    },
    removeSwitch() {
      this.$emit('remove', this.index);
    }
  }
}
</script>