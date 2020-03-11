import Vue from 'vue'
import copy from 'clipboard-copy'
Vue.mixin({
  methods: {
    copyToClickBord() {
      const url = location.href
      copy(url)
    }
  }
})
