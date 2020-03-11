<template lang="pug">
  div(ref="main")
    AppHeader
    nuxt
    AppFooter
    Video
    Support
    Expert
    Jury
    Position
    Contact
    School
    ContactsInfo
    OrderInfo
    RegionList
    Login
</template>
<script>
import AppHeader from '../components/ui/AppHeader'
import AppFooter from '../components/ui/AppFooter'
import { mapMutations } from 'vuex'
import RegionList from '~/components/ui/RegionList'

import Video from '~/components/pages/video'
import Support from '~/components/pages/support'
import Expert from '~/components/pages/expert'
import Jury from '~/components/pages/jury'
import Contact from '~/components/pages/contact'
import Position from '~/components/pages/position'
import School from '~/components/pages/school'
import ContactsInfo from '~/components/pages/contacts_info'
import OrderInfo from '~/components/pages/order_info'
import Login from '~/components/pages/login'

export default {
  components: {
    AppHeader,
    AppFooter,
    RegionList,
    Video,
    Support,
    Expert,
    Jury,
    Position,
    Contact,
    School,
    ContactsInfo,
    OrderInfo,
    Login
  },
  data() {
    return {
      isFirefox: typeof InstallTrigger !== 'undefined'
    }
  },
  computed: {
    app() {
      return this.$refs.main
    }
  },
  watch: {
    $route(to, from) {
      if (to.fullPath === '/') {
        this.SET_ACTIVE_CATEGORY(null)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      // eslint-disable-next-line no-console
      // eslint-disable-next-line no-console
      // console.log(window.innerWidth)
      if (window.innerWidth < 1800) {
        window.addEventListener('DOMContentLoaded', this.main())
        window.addEventListener('resize', this.main())
      }
    })
  },
  methods: {
    ...mapMutations('initiative', ['SET_ACTIVE_CATEGORY']),

    main() {
      const margin = 0
      const self = this
      requestAnimationFrame(function fitToParentOnResize() {
        fitToParent(document.getElementById('__nuxt'), margin, self.isFirefox)
      })
      function fitToParent(element, margin, isFirefox) {
        // eslint-disable-next-line no-unused-vars
        const scale = scaleAmountNeededToFit(element, margin)
        element.style.transformOrigin = '0 0'
        if (isFirefox) {
          element.style.transform = `translate(${margin}px, ${margin}px) scale(${scale})`
        } else {
          element.style.zoom = scale * 100 + '%'
        }
      }
      function scaleAmountNeededToFit(el, margin = 0) {
        const parentSize = {
          width: el.parentElement.clientWidth - margin * 2,
          height: el.parentElement.clientHeight - margin * 2
        }
        const elSize = Math.min(parentSize.width / el.clientWidth)
        document.getElementsByTagName('body')[0].style.height =
          140 * (parentSize.width / el.clientWidth) + 'px'

        return elSize
      }
    }
  }
}
</script>
