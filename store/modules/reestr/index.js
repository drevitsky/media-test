import * as TYPES from './types'

const namespaced = true

const state = () => ({
  name: null,
  initiatives: [],
  reestr: [],
  region: null,
  activeItem: null,
  page: 1
})

const actions = {
  async getReestr({ state, commit, dispatch }) {
    try {
      const response = await this.$axios.get('/regions', {
        params: {
          page: state.page
        }
      })
      const result = response.data
      commit(TYPES.SET_REESTR, result)

      if (result.length === 12) {
        commit(TYPES.CHANGE_PAGE, state.page + 1)
        dispatch('getReestr')
      }

      return result
    } catch (e) {
      return e
    }
  }
}

const mutations = {
  [TYPES.SET_ACTIVE_ITEM](state, payload) {
    state.activeItem = payload
  },

  [TYPES.INITIAL_REESTR](state, payload) {
    state.name = null
    state.initiatives = []
    state.reestr = []
    state.region = null
    state.page = 1
  },

  [TYPES.CHANGE_PAGE](state, payload) {
    state.page = payload
  },

  [TYPES.SET_REGION](state, payload) {
    state.region = payload
  },

  [TYPES.SET_REESTR](state, payload) {
    const list = []
    payload.forEach((item, i) => {
      item.initiatives.forEach((child, c) => {
        if (child.isActive === true) {
          const newItem = child
          newItem.name = item.name
          list.push(newItem)
        }
      })
    })
    state.reestr = state.reestr.concat(list)
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
