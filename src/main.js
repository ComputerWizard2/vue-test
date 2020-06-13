
import Vue from 'vue'
import App from './App'
import router from "./router";

import Element  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* eslint-disable no-new */

Vue.use(router)
Vue.use(Element)
new Vue({
  el: '#app',
  router,
  render: h => h(App)//elementUI
})
