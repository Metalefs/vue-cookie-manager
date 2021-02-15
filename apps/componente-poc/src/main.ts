import Vue from 'vue'
import App from './App.vue'
import {BlacklistService} from './core/services/cookies/blacklist.service';

window.onload = function(){
  // window['BlackListService'] = BlacklistService;
  var div = document.createElement('div');
  document.body.appendChild(div);
  Vue.config.productionTip = false;
  
  new Vue({
    el:div,
    render: h => h(App),
  });
}
