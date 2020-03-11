import Vue from 'vue'
import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.mixin({
  watch: {
    $route(to, from) {
      if (to.hash === '') {
        this.$modal.hide(from.hash.split('#')[1])
        return false
      }
      this.$modal.show(this.$route.hash.split('#')[1])
    }
  },
  mounted() {
    this.$modal.show(this.$route.hash.split('#')[1])
  },
  methods: {
    openModal(name) {
      this.$modal.show(name)
    },
    closeModal(name) {
      this.$modal.hide(name)
    },
    beforeClose(event) {
      this.$router.push(this.$route.matched[0].path)
    }
  }
})
