import store from '../store'
import messageApi from '../api/message-api'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval';

export function startMessageUpdateTimer() {
  Observable.interval(2000).subscribe(
    () => {
      messageApi.getMessage().subscribe(
        (payload) => {
          store.commit('helloMessage/setMessage', payload.message)
        },
        err => {
          console.log(err)
        }
      )
    },
    err => {
      console.log(err)
    }
  )
}