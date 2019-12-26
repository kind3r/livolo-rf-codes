<template>
  <div class="card">
    <img src="../assets/livolo1.jpg" class="card-img-top" alt="One gang switch" v-if="type == 1">
    <img src="../assets/livolo2.jpg" class="card-img-top" alt="Two gang switch" v-if="type == 2">
    <img src="../assets/livolo3.jpg" class="card-img-top" alt="Three gang switch" v-if="type == 3">
    <div class="card-body">
      <select class="form-control" v-model="type">
        <option value="1">One gang</option>
        <option value="2">Two gang</option>
        <option value="3">Three gang</option>
      </select>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Name</span>
        </div>
        <input type="text" class="form-control" aria-describedby="basic-addon3" v-model="name">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">ID</span>
        </div>
        <input type="text" class="form-control-plaintext" aria-describedby="basic-addon3" v-model="id" readonly>
      </div>
      <a href="#" class="card-link">Remove</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index'],
  name: 'LivoloSwitch',
  data: function() {
    return {
      name: "Livolo Switch " + this.index,
      type: 2
    }
  },
  computed: {
    id() {
      return this.name.toLowerCase().replace(/[^a-z0-9]/g,'_');
    }
  }
}
</script>