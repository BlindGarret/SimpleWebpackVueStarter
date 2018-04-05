import Vue from 'vue';
import HelloWorld from '../../../src/components/hello-world.vue';

describe('HelloWorld', () => {
  it('should set correct message value', () => {
    it('has a created hook', () => {
      expect(typeof HelloWorld.created).toBe('function')
    })

    it('sets the correct default data', () => {
      expect(typeof HelloWorld.data).toBe('function')
      const defaultData = HellowWorld.data;
      expect(defaultData.message).toBe('Hello World!')
    })

    it('renders the correct message', () => {
      const Constructor = Vue.extend(HelloWorld)
      const vm = new Constructor().$mount()
      expect(vm.$el.textContent).toBe('Hello World!')
    })
  })
})