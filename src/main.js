import Vue from 'vue'
import App from './App.vue'
import './assets/styles/resetCss.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(store)

new Vue({
  render: h => h(App),
}).$mount('#app')
