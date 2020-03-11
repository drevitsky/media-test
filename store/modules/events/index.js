import * as TYPES from './types'

const namespaced = true

const state = () => ({
  events: [],
  page: 1,
  totalNews: null,
  mainEvents: []
})

const actions = {
  async getNewsOnMain({ commit }, data) {
    try {
      const response = await this.$axios.get('/news', {
        params: data
      })
      if (response.data) {
        const arr = response.data.slice(0, 7)
        commit(TYPES.SET_NEWS_MAIN, arr)
      }

      return response.data
    } catch (e) {
      return e
    }
  },

  async getCountEvents({ commit }, data) {
    try {
      const response = await this.$axios.get('/total-items/news')
      commit(TYPES.SET_TOTAL_NEWS, response.data)

      return response.data
    } catch (e) {
      return e
    }
  },

  async getEvents({ commit }, data) {
    let params = ''
    if (data) {
      params += '?'
      for (const key in data) {
        params += `${key}=${data[key]}&`
      }
      params = params.slice(0, -1)
    }
    try {
      const response = await this.$axios.get(`/news${params}`)
      commit(TYPES.SET_EVENTS, response.data)

      return response.data
    } catch (e) {
      return e
    }
  }
}

const mutations = {
  [TYPES.INITIAL_EVENTS](state, payload) {
    state.events = []
    state.page = 1
    state.totalNews = null
  },

  [TYPES.SET_EVENTS](state, payload) {
    state.events = payload
  },

  [TYPES.SET_TOTAL_NEWS](state, payload) {
    state.totalNews = payload.totalItems
  },

  [TYPES.SET_NEWS_MAIN](state, payload) {
    state.mainEvents = payload
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
