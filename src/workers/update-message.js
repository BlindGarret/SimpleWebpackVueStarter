import store from '../store'
import messageApi from '../api/message-api'

export function startMessageUpdateTimer() {
  console.log(2)
  setInterval(() => {
    messageApi.getMessage((payload) => {
      store.commit('helloMessage/setMessage', payload.message)
    })
  }, 2000)
}