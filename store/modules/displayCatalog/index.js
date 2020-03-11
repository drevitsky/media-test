const namespaced = true

const state = () => ({
  list: true,
  map: false
})

const actions = {
  setList(ctx, payload) {
    ctx.commit('setList', payload)
  },
  setMap(ctx, payload) {
    ctx.commit('setMap', payload)
  }
}

const mutations = {
  setList(state, payload) {
    state.list = payload
  },
  setMap(state, payload) {
    state.map = payload
  }
}

const getters = {
  getList(state) {
    return state.list
  },
  getMap(state) {
    return state.map
  }
}

export default {
  namespaced,
  actions,
  state,
  mutations,
  getters
}
