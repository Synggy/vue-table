import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.component('Icon', Icon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
