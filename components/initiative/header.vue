<template lang="pug">
  header.header
    .header__logo.desctop
      img(:src="returnImageUrl(initiative.image)", alt="")
    .header__content
      span Инициатива:
      .heading
        h1 {{ initiative.title }}
      .place {{ initiative.city }}
      .nomination В номинации
        nuxt-link(:to="`/catalog/${initiative.category && initiative.category.id}`") «{{ initiative.category && initiative.category.name }}»
      .flex.rating_block
        .position(v-if="initiative.position") {{ initiative.position }}
        .rating
          i.icon.icon-rating
          span {{ initiative.rating.toFixed(2) }}
        .view
          i.icon.icon-view
          span {{ initiative.views }}
        .comments
          i.icon.icon-comment
          span {{ initiative.comments.length }}
</template>
<script>
import { functions } from '@/modules'

export default {
  props: {
    initiative: {
      type: Object,
      required: true
    }
  },
  methods: {
    returnImageUrl(src) {
      return functions.returnUrlPrefix() + '' + src
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.header
  display: flex
  margin-bottom: 35px
  &__logo
    border-radius: 4px
    box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
    margin-right: 50px
    width: 120px
    height: 120px
    flex: 0 0 auto
    overflow: hidden
    img
      display: block
      width: 100%
      height: 100%
      object-fit: cover
  &__content
    span
      font-size: 16px
      font-weight: bold
      margin-bottom: 5px
      display: inline-block
      text-align: left
      color: $black
      @media (max-width: 767px)
        font-size: 14px
    .heading h1
      color: $black
      font-size: 27px
      line-height: 34px
    .place
      font-size: 16px
      font-weight: 500
      line-height: 3
      text-align: left
      color: #666666
      @media (max-width: 767px)
        font-size: 14px
    .nomination
      font-size: 16px
      font-weight: 600
      line-height: 3
      text-align: left
      color: $black
      @media (max-width: 767px)
        font-size: 14px
        line-height: 1
        margin: 15px 0 25px
      a
        color: $blue
        font-weight: 500
        margin-left: 7px
        @media (max-width: 767px)
          margin: 7px 0
          display: block
    .rating_block
      flex-wrap: wrap
      justify-content: flex-start
    .flex
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
          margin-bottom: 0
      .position
        font-size: 20px
        font-weight: bold
        line-height: 1.3
        color: $red
        margin-right: 40px
        @media (max-width: 767px)
          margin: 15px 0
          width: 100%
          text-align: center
      .rating
        i
          margin-right: 9px
</style>
