import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select, Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

Vue.prototype.$ELEMENT = { size: 'normal', zIndex: 3000 }
Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
