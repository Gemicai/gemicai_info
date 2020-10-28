import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import axios from "axios"
import './quasar'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

Vue.config.productionTip = false
Vue.use(VueRouter);

import routes from './routes'

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

router.afterEach((to) => {
    Vue.nextTick(() => {
        if (to.meta.title !== undefined) {
            document.title = to.meta.title
        }
    })
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
