import config from './config/index.json'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Медиа проект "Тест"',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1.0,user-scalable=no'
        // content: 'width=320,minimum-scale=0.3,maximum-scale=3'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700|Fira+Sans+Condensed:300i,400,600|Montserrat:300,400,500,600,700&display=swap&subset=cyrillic,cyrillic-ext'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f53c4d', height: '5px' },
  // loadingIndicator: {
  //   name: 'spinner',
  //   color: '#fff',
  //   background: '#000'
  // },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/app.sass', lang: 'sass' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-auth',
    '~plugins/nuxt-client-init',
    '~plugins/vue-axios',
    '~plugins/vue-swiper',
    '~plugins/vue-modal',
    '~plugins/vue-clipbord',
    '~plugins/vue-infinite-loading',
    '~plugins/vue-pagination',
    '~plugins/vue-socials',
    '~plugins/vue-lodash'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/eslint-module',
    [
      'vue-yandex-maps/nuxt',
      {
        apiKey: '2e293b19-2a14-478a-b7c9-63dbbea87b4a',
        lang: 'ru_RU',
        version: '2.1'
      }
    ],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '3085748',
        defer: true,
        webvisor: true,
        clickmap: true,
        // useCDN:false,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ]
  ],
  svgSprite: {
    input: '~/static/img/svg/'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      if (from.hash) {
        return { selector: from.hash }
      }
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
}
