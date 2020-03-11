import FBAuth from './vue-auth/facebook'
import VKAuth from './vue-auth/vkontakte'
import Vue from 'vue'

const authed = {
  install: (Vue, options) => {
    Vue.authed = () => {
      const configs = options
      return {
        facebook: () => {
          return {
            init: () => {
              // if (window.FB === undefined) {
              FBAuth.fbInstallClient().then(() => {
                FBAuth.fbInitClient(configs.facebook)
              })
              // }
            },
            signIn: FBAuth.fbSignIn,
            signOut: VKAuth.fbSignOut,
            getProfile: FBAuth.fbGetProfile
          }
        },
        vkontakte: () => {
          return {
            init: () => {
              return new Promise((resolve, reject) => {
                VKAuth.vkInstallClient()
                  .then(() => {
                    return VKAuth.vkInitClient(configs.vk)
                  })
                  .then(() => {
                    resolve()
                  })
              })
            },
            signIn: VKAuth.vkSignIn,
            signOut: VKAuth.vkSignOut,
            getProfile: VKAuth.vkGetProfile
          }
        }
      }
    }
  }
}

Vue.use(authed, {
  facebook: {
    appId: '1429241480494005',
    cookie: true,
    oauth: true
    // xfbml: true,
    // version: 'v3.2'
  },
  vk: {
    apiId: '6419418'
  }
})
Vue.authed()
  .facebook()
  .init()
Vue.authed()
  .vkontakte()
  .init()

export default (ctx, inject) => {
  inject('authed', Vue.authed())
}
