// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './components/store/store'
import './permission'
// import './global'
import components from './global'
console.log('components', components);
Vue.use(components)

// mock
import './mock'

import Child from './components/Slot';
import Child2 from './components/Slot2';
import SlotParent from './components/SlotParent';
import VueResource from 'vue-resource';

// iconfont
import '@/assets/fonts/iconfont.css'

// 自适应插件
import 'lib-flexible/flexible';

Vue.prototype.vbus = new Vue();
// GLOBAL.vbus = new Vue();

Vue.use(VueResource);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

// vant
import 'vant/lib/index.css'
import Vant from 'vant';
Vue.use(Vant);

// mint
import Mint from 'mint-ui'; 
Vue.use(Mint);
import 'mint-ui/lib/style.css'

// uiv
import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'
Vue.use(uiv)

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.component(Child.name,Child);
// Vue.component(Child2.name,Child2);

// xx
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
Vue.use(VueHighcharts,  Highcharts );

// meta
import Meta from 'vue-meta'
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)

import { ConfigPlugin } from 'vux'

Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX'
})

// 方便移动端调试
import VConsole from 'vconsole';
/* eslint-disable no-new */
new VConsole();

router.beforeEach((to, from, next) => {
  console.log(to);
  // if (to.path === '/me/auth') {
  //   location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc63718bce6132657&redirect_uri=http://192.168.0.90:8085/me/auth&response_type=code&scope=snsapi_userinfo&state=abcdefghigklmnopqrstuvwxyz#wechat_redirect';
  //   // next();
  // }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
