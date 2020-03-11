/* eslint-disable */

const facebookAuth = {
  fbInstallClient: () => {
    return new Promise((resolve, reject) => {
      const fbClientScript = document.createElement('script')
      fbClientScript.setAttribute(
        'src',
        'https://connect.facebook.net/ru_RU/all.js'
      )
      document.getElementsByTagName('head')[0].appendChild(fbClientScript)
      setTimeout(() => {
        resolve()
      }, 0)
    })
  },

  fbInitClient: (configs) => {
    // return new Promise((resolve, reject) => {
      if (configs !== undefined) {
        window.fbAsyncInit = () => {
          FB.init(configs)
        }
      }
          // setTimeout(() => {
          //   resolve()
          // }, 500)
    //   } else {
    //     console.log('Undefined configs for FBapi! Initialized failed!')
    //     reject()
    //   }
    // })
  },

  fbSignIn: (successCallback, errorCallback) => {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          resolve(response)
        } else {
          FB.login((response) => {
            if (response.status === 'connected') {
              resolve(response)
            } else {
              console.log(response)
              reject(response)
            }
          }, { scope: 'public_profile,email' })
        }
      })
    })
  },

  fbSignOut: () => {
    return new Promise((resolve, reject) => {
      FB.logout((response) => {
        resolve(response)
      })
    })
  },

  fbGetProfile: () => {
    return new Promise((resolve, reject) => {
      FB.api('/me?fields=id,first_name,last_name,picture,email', (response) => {
        resolve(response)
      })
    })
  }
}

export default facebookAuth
