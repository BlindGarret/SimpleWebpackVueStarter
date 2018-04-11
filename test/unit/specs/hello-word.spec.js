import HelloWorld from '../../../src/components/hello-world.vue';
import { expect } from 'chai'
import { shallow } from '@vue/test-utils'

describe('HelloWorld', () => {
  describe('should set correct message value', () => {
    it('has data to be read', () => {      
      expect(typeof HelloWorld.data).to.equal('function')
    })
    
    it('sets the correct default data', () => {
      const defaultData = HelloWorld.data();
      expect(defaultData.message).to.equal('Hello World!')
    })

    it('renders the correct message', () => {
      const component = shallow(HelloWorld)
      expect(component.vm.$el.textContent).to.equal('Hello World!')
    })
  })
})