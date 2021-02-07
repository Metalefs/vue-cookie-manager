import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// create iframe element
var div = document.createElement('div')
div.id = 'LGPD'
// place iframe inside page html
document.body.appendChild(div)

new Vue({
  el:div,
  render: h => h(App),
});
