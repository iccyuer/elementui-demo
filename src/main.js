// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './components/store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Child from './components/Slot';
import Child2 from './components/Slot2';
import SlotParent from './components/SlotParent';
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.component(Child.name,Child);
// Vue.component(Child2.name,Child2);

import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
