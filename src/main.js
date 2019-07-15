// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css'
import axios from 'axios'
import moment from 'moment'

Vue.use(ElementUI);
//定义全局过滤器
Vue.filter('dateFormate', (v, formateStr) => {
  return moment(v).format(formateStr)
});

Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";
Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
