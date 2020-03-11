// import Vue from 'vue'
// import VueAxios from 'vue-axios'
//
// import axios from '@/utils/axios'
//
// Vue.use(VueAxios, axios)
import axios from '~/utils/axios'

export default (ctx, inject) => {
  inject('axios', axios)
}
