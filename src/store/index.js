import Vue from 'vue'
import Vuex from 'vuex'

import message from './modules/message'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    message
  },
  strict: isDebug
})