import * as modules from './modules'
import actions from './actions'
import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules,
    actions
  })
}
