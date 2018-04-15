import styles_ from './styles/styles.scss'
import Vue from 'vue'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import { Subject } from 'rxjs/Subject'
import VueRx from 'vue-rx'

import App from './app.vue'
import store from './store'
import { startMessageUpdateTimer } from './workers/update-message'

Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject
})

let _ = new Vue({
  el: '#index',
  store,
  components: { App }
})

startMessageUpdateTimer()
