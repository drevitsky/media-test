<template lang="pug">
  .events
    .container-fluid.container-padding
      .row
        .col-sm-8
          .heading
            h2 События благосферы
        .col-sm-4.col-xs-12.flex.justify-end
          nuxt-link.desctop(to="/events").btn.btn-transparent Все события
        article.events__big(v-for="event in mainEvents.slice(0, 1)" :key="event.id")
          .bg(:style="`background-image: url(${returnImageUrl(event.image)})`")
          header
            a(href="#").events__category Премия
            .flex
              p.events__date {{ date(event.createdAt) }}
              //- p.events__view
              //-   img(src="/img/ui/view-white.svg", alt="")
              //-   | {{ event.views }}
          main
            h1
              a(:href="'#' + event.id" @click="openModal(event.id)") {{event.title}}
          CardModal(:event="event")
        Card(v-for="(item, i) in mainEvents.slice(1, 7)" :key="i" :event="item")
        .col-xs-12.flex.justify-center
          nuxt-link.mobile(to="/events").btn.btn-transparent Смотреть все события
</template>

<script>
import { functions } from '@/modules'
import { mapState, mapActions } from 'vuex'
import dayjs from 'dayjs'

import Card from '~/components/events/card'
import CardModal from '~/components/events/cardModal'

export default {
  components: {
    Card,
    CardModal
  },
  data() {
    return {
      events: null
    }
  },
  computed: {
    ...mapState('events', ['mainEvents'])
  },
  async created() {
    this.events = await this.getNewsOnMain({ isMain: true })
  },
  methods: {
    ...mapActions('events', ['getNewsOnMain']),

    date(d) {
      const date = dayjs(d)
      return date.format('D.MM.YYYY')
    },

    returnImageUrl(src) {
      return functions.returnUrlPrefix() + '' + src
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.events
  padding: 50px 0
  h2
    margin-bottom: 50px
    font-family: $firacond
    font-size: 44px
    line-height: 36px
    @media (max-width: 767px)
      font-size: 22px
      margin-bottom: 10px
  .btn-transparent
    color: $blue
    border: 1px solid $blue
    border-radius: 4px
    &:hover
      background: $blue
      color: #fff
    &.mobile
      @media (max-width: 767px)
        color: $blue
        display: inline-block
  &__big
    height: 478px
    background: #16228587
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding: 45px 50px
    position: relative
    border-radius: 4px
    overflow: hidden
    width: calc(50% - 1rem)
    margin: 0px .5rem .60px
    @media (max-width: 767px)
      height: 280px
      padding: 14px
      width: 100%
      margin: 0 0 20px
    &:before
      content: ''
      background-image: url(/img/home/events/opacity.png)
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      display: block
    .bg
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      background-size: cover
      z-index: -1
    .flex
      align-items: center
    header
      margin-bottom: 13px
      @media (max-width: 767px)
        display: flex
        justify-content: space-between
    h1
      margin-bottom: 0
      font-family: $mont
      color: $white
      font-size: 24px
      font-weight: 800
      position: relative
      line-height: 1.5
      @media (max-width: 767px)
        font-size: 14px
      a
        color: white
        text-decoration: none
        &:hover
          text-decoration: underline
  &__category
    text-transform: uppercase
    font-size: 12px
    font-weight: bold
    font-family: $mont
    line-height: 3
    letter-spacing: 3.6px
    text-align: left
    color: $red
    position: relative
    text-decoration: none
  &__date
    font-size: 18px
    font-family: $mont
    font-weight: bold
    line-height: 2
    text-align: left
    color: $white
    position: relative
    @media (max-width: 767px)
      line-height: 1
      font-size: 14px
    &.black
      color: $black
      font-size: 18px
      @media (max-width: 767px)
        font-size: 14px
  &__view
    position: relative
    color: $white
    margin-left: 28px
    display: flex
    align-items: center
    @media (max-width: 767px)
      display: none
    &.grey
      color: $greyish-brown
      i
        color: $greyish-brown
    img
      margin-right: 10px
</style>
