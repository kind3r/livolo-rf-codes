<template>
  <div id="app" class="container">
    <h1>Generate Home Assistant configuration for Livolo RF switches used via Broadlink RM 2/RM Pro/RM Plus remote</h1>
    <div class="container border">
      <h2>Step 1 - Add switches</h2>
      <div class="row">
        <div class="col-lg-4">
          <LivoloSwitch index="1"></LivoloSwitch>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="card-header">
              Add switch
            </div>
            <div class="card-body">
              <h5 class="card-title">Choose a type</h5>
              <p class="w-100"><a href="#" class="btn btn-primary w-100">One gang</a></p>
              <p class="w-100"><a href="#" class="btn btn-primary w-100">Two gang</a></p>
              <p class="w-100"><a href="#" class="btn btn-primary w-100">Three gang</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LivoloSwitch from "./components/LivoloSwitch";

export default {
  name: 'app',
  components: {
    LivoloSwitch
  }
}
</script>

