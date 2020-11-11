import Vue from 'vue'
import App from './App.vue'
import { checkTel } from '@/utils'

Vue.config.productionTip = false
Vue.prototype.$checkTel = checkTel

new App().$mount()

