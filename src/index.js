import styles_ from './styles/styles.scss'
import Vue from 'vue'
import App from './app.vue'
import store from './store'

let _ = new Vue({
  el: '#index',
  store,
  components: { App }
})
