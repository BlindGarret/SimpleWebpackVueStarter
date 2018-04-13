// Mock API call

export default {
  getMessage(callback) {
    setTimeout(() => callback({message: 'Hello World!'}), 1000)
  }
}