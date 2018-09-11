// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import Vue from 'vue'
import App from './components/Hello.vue'

const v = new Vue({
  el: '#app',
  render: h => h(App),
})
