import * as TYPES from './types'

const namespaced = true

const state = () => ({
  totalNominations: 0,
  totalInitiatives: 0,
  totalVotes: 0,
  totalRegions: 0,
  totalComments: 0
})

const actions = {
  // Берём общее кол-во номинаций (категорий)
  async getTotalNominations({ commit }, data) {
    try {
      const response = await this.$axios.get('/total-items/categories')
      const { totalItems } = response.data
      commit(TYPES.SET_TOTAL_NOMINATIONS, totalItems)

      return response.data
    } catch (e) {
      return e
    }
  },
  // Берём общее кол-во инициатив (пунткы в номинациях)
  async getTotalInitiatives({ commit }, data) {
    try {
      const response = await this.$axios.get('/total-items/initiatives')
      const { totalItems } = response.data
      commit(TYPES.SET_TOTAL_INITIATIVES, totalItems)

      return response.data
    } catch (e) {
      return e
    }
  },
  // Берём общее кол-во отданых голосов
  async getTotalVotes({ commit }, data) {
    try {
      const response = await this.$axios.get('/total-items/votings')
      const { totalItems } = response.data
      commit(TYPES.SET_TOTAL_VOTES, totalItems)

      return response.data
    } catch (e) {
      return e
    }
  },
  // Берём общее кол-во регионов
  async getTotalRegions({ commit }, data) {
    try {
      const response = await this.$axios.get('/total-items/regions')
      const { totalItems } = response.data
      commit(TYPES.SET_TOTAL_REGIONS, totalItems)

      return response.data
    } catch (e) {
      return e
    }
  },
  // Берём общее кол-во отзывов
  async getTotalComments({ commit }, data) {
    try {
      const response = await this.$axios.get('/total-items/comments')
      const { totalItems } = response.data
      commit(TYPES.SET_TOTAL_COMMENTS, totalItems)

      return response.data
    } catch (e) {
      return e
    }
  }
}

const mutations = {
  [TYPES.SET_TOTAL_NOMINATIONS](state, payload) {
    state.totalNominations = payload
  },

  [TYPES.SET_TOTAL_INITIATIVES](state, payload) {
    state.totalInitiatives = payload
  },

  [TYPES.SET_TOTAL_VOTES](state, payload) {
    state.totalVotes = payload
  },

  [TYPES.SET_TOTAL_REGIONS](state, payload) {
    state.totalRegions = payload
  },

  [TYPES.SET_TOTAL_COMMENTS](state, payload) {
    state.totalComments = payload
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
