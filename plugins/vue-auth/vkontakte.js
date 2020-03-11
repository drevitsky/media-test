/* eslint-disable */

const vkontakteAuth = {
  vkInstallClient: () => {
    return new Promise((resolve, reject) => {
      const vkClientScript = document.createElement('script')
      vkClientScript.setAttribute(
        'src',
        'https://vk.com/js/api/openapi.js?167'
      )
      document.getElementsByTagName('head')[0].appendChild(vkClientScript)
      setTimeout(() => {
        resolve()
      }, 0)
    })
  },

  vkInitClient: (configs) => {
    // return new Promise((resolve, reject) => {
      if (configs !== undefined) {
        window.vkAsyncInit = () => {
          VK.init(configs, (res) => {
            console.log('VK init sucess')
          })
        }
        // console.log('VKapi is initialized!')
        // setTimeout(() => {
        //   resolve()
        // }, 500)
      }
    //   } else {
    //     console.log('Undefined configs for VKapi! Initialized failed!')
    //     reject()
    //   }
    // })
  },

  vkSignIn: (successCallback, errorCallback) => {
    return new Promise((resolve, reject) => {
      VK.Auth.login((response) => {
        if (response.status === 'connected') {
          resolve(response)
        } else {
          console.log(response)
          reject(response)
        }
      }, 4194304)
    })
  },

  vkSignOut: () => {
    return new Promise((resolve, reject) => {
      VK.Auth.logout((response) => {
        if (response.session === null) {
          resolve(response)
        } else {
          console.log(response)
          reject(response)
        }
      })
    })
  },

  vkGetProfile: (userId) => {
    return new Promise((resolve, reject) => {
      VK.Api.call('users.get', { fields: 'photo_50', v: '5.103' }, (res) => {
        if (res.response) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    })
  }
}

export default vkontakteAuth
