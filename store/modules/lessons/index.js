import * as TYPES from './types'

const namespaced = true

const state = () => ({
  cards: [],
  lessons: null,
  activeCategory: null
})

const actions = {
  async getLessons({ commit }, data) {
    console.log('>>>>>>>>>>')
    try {
      const response = await this.$axios.get('/schools')
      if (!data.return) {
        commit(TYPES.SET_LESSONS, response.data)
      }

      return response.data
    } catch (e) {
      console.log('>>>>>>>>>> ошибка!!!!')
      return e
    }
  }
}

const mutations = {
  [TYPES.SET_LESSONS](state, payload) {
    state.lessons = payload
  },
  [TYPES.SET_INITIAL_LESSONS](state, payload) {
    state.lessons = null
  }
}

const getters = {
  getLesson(state) {
    return state.cards || []
  }
}

export default {
  namespaced,
  actions,
  state,
  mutations,
  getters
}
