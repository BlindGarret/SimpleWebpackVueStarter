import styles_ from './styles/styles.scss'
import Vue from 'vue'
import App from './app.vue'
import store from './store'
import { startMessageUpdateTimer } from './workers/update-message'

let _ = new Vue({
  el: '#index',
  store,
  components: { App }
})

console.log(1)
startMessageUpdateTimer()
