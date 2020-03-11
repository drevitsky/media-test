import * as TYPES from './types'

const namespaced = true

const state = () => ({
  auth: false,
  socials: {},
  profile: null
})

const actions = {
  async getSocialsUrl({ commit }, data) {
    try {
      const response = await this.$axios.get('/social-urls')
      commit('SET_SOCIALS', response.data)

      return response.data
    } catch (e) {
      return e
    }
  },

  async fbSignIn({ commit }, data) {
    try {
      const response = await this.$authed.facebook().signIn()
      if (response.status === 'connected') {
        // response.authResponse { accessToken, userID, expiresIn }
        const profile = await this.$authed.facebook().getProfile()
        if (profile) {
          commit('SET_AUTH', true)
          commit('SET_PROFILE', {
            userName: `${profile.first_name} ${profile.last_name}`,
            image: profile.picture.data.url,
            firstName: profile.first_name,
            lastName: profile.last_name,
            social: 'facebook',
            socialId: profile.id,
            accessToken: response.authResponse.accessToken
          })
        }
      }
      return response
    } catch (e) {
      return e
    }
  },

  async vkSignIn({ commit }, data) {
    try {
      const response = await this.$authed.vkontakte().signIn()
      if (response.status === 'connected') {
        // response { status, session: { user } }
        const profile = response.session.user
        const profile2 = await this.$authed.vkontakte().getProfile(profile.id)
        if (profile2.response) {
          profile.picture = profile2.response[0].photo_50
        }

        commit('SET_AUTH', true)
        commit('SET_PROFILE', {
          userName: `${profile.first_name} ${profile.last_name}`,
          image: profile.picture,
          firstName: profile.first_name,
          lastName: profile.last_name,
          social: 'vkontakte',
          socialId: profile.id,
          accessToken: response.session.sid
        })
      }

      return response
    } catch (e) {
      return e
    }
  },

  async vkSignOut({ commit }, data) {
    try {
      const response = await this.$authed.vkontakte().signOut()
      commit('SET_AUTH', false)
      commit('SET_PROFILE', null)

      return response
    } catch (e) {
      return e
    }
  },

  async fbSignOut({ commit }, data) {
    try {
      const response = await this.$authed.facebook().signOut()
      commit('SET_AUTH', false)
      commit('SET_PROFILE', null)

      return response
    } catch (e) {
      return e
    }
  },

  async signIn({ commit }, data) {
    try {
      const response = await this.$axios.post('/login', data)
      console.log(response)
      // commit('SET_AUTH', true)

      return response
    } catch (e) {
      return e
    }
  }
}

const mutations = {
  [TYPES.SET_SOCIALS](state, payload) {
    state.socials = payload
  },

  [TYPES.SET_AUTH](state, payload) {
    state.auth = payload
  },

  [TYPES.SET_PROFILE](state, payload) {
    state.profile = payload
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
