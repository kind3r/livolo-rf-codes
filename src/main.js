import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';

import 'prismjs'
import 'prismjs/components/prism-yaml'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'
import 'prismjs/themes/prism-coy.css'
import Prism from 'vue-prism-component'
Vue.component("Prism", Prism);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
