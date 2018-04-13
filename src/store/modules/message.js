//import messageApi from '../../api/get-message-api'

// initial state
const state = {
  message: 'Default message.'
}

// getters
const getters = {
  message: state => state.message
}

// actions
const actions = {
  reverse({commit, state}) {
    const reversed = state.message.split('').reverse().join('')
    commit('setMessage', reversed)
  }
}

// mutations
const mutations = {
  setMessage(state, message) {
    state.message = message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}