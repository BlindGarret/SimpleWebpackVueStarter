import { expect } from 'chai'
import { shallow, createLocalVue } from '@vue/test-utils'
import { describe, it, beforeEach } from 'mocha'
import sinon from 'sinon'
import Vuex from 'vuex'

import startMessageUpdateTimer from '../../../src/workers/update-message'
import s_ from '../../../src/store'

import HelloWorld from '../../../src/components/hello-world.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Helloworld Component', () => {
  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      reverse: sinon.stub()
    }
    getters = {
      message: () => 'Hello World!'
    }
    store = new Vuex.Store({
      modules: {
        helloMessage: {
          namespaced: true,
          state: {},
          actions: actions,
          getters: getters
        }
      }
    })
  })

  describe('Message', () => {
    it('should set correct message value', () => {
      const component = shallow(HelloWorld, {
        store,
        localVue
      })
      const p = component.find('p')
      expect(p.text()).to.equal(getters.message())
    })
  })

  describe('reverse button', () => {
    it('pushing button calls reverse action', () => {
      const component = shallow(HelloWorld, {
        store,
        localVue
      })
      const button = component.find('button')
      button.trigger('click')
      sinon.assert.calledOnce(actions.reverse)
    })
  })
})
