<template lang="pug">
  nuxt-link(:to="`/initiative/${card.id}`")
    article.card
      .row
        .col-sm-10.content_card
          header
            h1 {{ card.title }}
            span {{ card.city }}
          main.desctop
            p(v-html="card.target")
          footer
            .position(v-if="card.position") {{ card.position }}
            .rating
              i.icon.icon-rating
              span {{ card.rating.toFixed(2) }}
            .view
              i.icon.icon-view
              span {{ card.views }}
            .comments(v-if="card.comments")
              i.icon.icon-comment
              span {{ card.comments.length }}
        .col-sm-2.flex.center-xs.middle-xs.logo_card
          img(v-if="card.image" :src="returnImageUrl(card.image)", alt="")
          img(v-else src="/img/non-logo.png")
</template>

<script>
import { functions } from '@/modules'

export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  mounted() {},
  methods: {
    returnImageUrl(src) {
      return functions.returnUrlPrefix() + '' + src
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
a
  text-decoration: none
.card
  padding: 30px 40px
  background: $white
  margin-bottom: 20px
  border-radius: 5px
  box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
  transition: all 0.3s
  @media (max-width: 767px)
    padding: 15px 25px
  &:hover
    box-shadow: 0px 3px 8px 0 rgba($blue, 0.3)
  .logo_card
    order: 1
    margin: 0 auto 10px
  .content_card
    order: 2
    width: 100%
  header
    h1
      font-size: 26px
      font-family: $fira
      font-weight: 600
      font-style: normal
      font-stretch: condensed
      line-height: 1
      letter-spacing: normal
      text-align: left
      color: $blue
      @media (max-width: 767px)
        font-size: 18px
    span
      font-family: $mont
      font-size: 16px
      font-weight: 500
      font-style: normal
      font-stretch: normal
      line-height: 3
      letter-spacing: normal
      text-align: left
      color: $black
      @media (max-width: 767px)
        font-size: 14px
        line-height: 1
        margin: 15px 0
        display: block
  main
    p
      font-family: $mont
      font-size: 16px
      font-weight: 500
      font-style: normal
      font-stretch: normal
      line-height: 1.63
      letter-spacing: normal
      text-align: left
      color: $greyish-brown
      margin-bottom: 10px
      @media (max-width: 767px)
        font-size: 14px
  footer
    display: flex
    align-items: center
    @media (max-width: 767px)
      font-size: 14px
      flex-wrap: wrap
      justify-content: space-between
    i
      margin-right: 9px
    span
      font-size: 16px
      font-weight: 500
      line-height: 1.63
      text-align: left
      color: $greyish-brown
      margin-right: 30px
      @media (max-width: 767px)
        margin-right: 0
    .position
      font-size: 20px
      font-weight: bold
      line-height: 1.3
      color: $red
      margin-right: 40px
      @media (max-width: 767px)
        width: 100%
        margin: 0 0 15px
        text-align: center
    .rating
      i
        margin-right: 9px

  img
    width: 200px
</style>
