import * as TYPES from './types'

const namespaced = true

const state = () => ({
  years: [],
  singleCity: null
})

const actions = {
  async getCity({ commit }, data) {
    try {
      const response = await this.$axios.get(`/years_cities/${data.id}`)
      const result = response.data
      commit(TYPES.SET_CITY, result)

      return result
    } catch (e) {
      return e
    }
  },

  async getYears({ commit }, data) {
    try {
      const response = await this.$axios.get('/years')
      const result = response.data
      commit(TYPES.SET_YEARS, result)

      return result
    } catch (e) {
      return e
    }
  }
}

const mutations = {
  [TYPES.INITIAL_CITY](state, payload) {
    state.singleCity = null
  },

  [TYPES.SET_YEARS](state, payload) {
    state.years = payload.reverse()
  },

  [TYPES.SET_CITY](state, payload) {
    state.singleCity = payload
  }
}

const getters = {}

export default {
  namespaced,
  actions,
  state,
  mutations,
  getters
}
