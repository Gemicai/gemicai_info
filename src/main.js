import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import './quasar'

Vue.config.productionTip = false
Vue.use(VueRouter);

import routes from './routes'

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function(to) {
      if (to.hash) {
          return {selector: to.hash, offset: { x: 0, y: 150}}
      } else {
          return { x: 0, y: 0 }
      }
  },
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
