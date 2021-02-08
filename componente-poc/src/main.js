import Vue from 'vue'
import App from './App.vue'

window.onload = function(){
  var div = document.createElement('div');
  document.body.appendChild(div);
  Vue.config.productionTip = false;
  
  new Vue({
    el:div,
    render: h => h(App),
  });
}
