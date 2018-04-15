// Mock API call
import { Observable } from 'rxjs/Observable'


const first = 'Hello World!'
const second = 'Hello Again!'
let useFirst = true;

export default {
  getMessage() {
    return Observable.create(function (observer) {
      useFirst = !useFirst
      observer.next({message: useFirst ? first : second})
      observer.complete()
    })
  }
}