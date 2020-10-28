import Vue from 'vue'

import './styles/quasar.sass'
import iconSet from 'quasar/icon-set/fontawesome-v5'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar, Dialog, Notify } from 'quasar'

Vue.use(Quasar, {
  config: { dark: true, },
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
    Dialog, Notify
  },
  iconSet: iconSet
 })
