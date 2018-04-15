// Mock API call

const first = 'Hello World!'
const second = 'Hello Again!'
let useFirst = true;

export default {
  getMessage(callback) {
    setTimeout(() => {
      callback({message: useFirst ? first : second})
      useFirst = !useFirst
    }, 200)
  }
}