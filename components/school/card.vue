<template lang="pug">
  article.card
    .row
      .col-sm-8.content_card
        nuxt-link(:to="`/lessons/${card.id}`")
          h2.card-title {{ card.name }}
        .block__parags(v-html="smallBody(card.schoolExperts[0].description)")
        .row.detail__row
          .col-sm-4.detail__col
            .detail__title Эксперт:
            .detail__title--name {{ card.schoolExperts[0].name}}
            .detail__title--role {{ card.schoolExperts[0].role}}
          // .col-sm-4.detail__col
          //   .detail__title Регион:
          //   .detail__title--name Московская область
          // .col-sm-4.detail__col
          //   .detail__title Категория:
          //   .detail__title--link Благоустройство
        .row.card__footer
          nuxt-link(:to="`/lessons/${card.id}`").btn.btn-red Перейти к уроку
      .col-sm-4.flex.center-xs.middle-xs.logo_card
        .wrapper
          .image__wrap
            img(v-if="card.schoolExperts[0].image" :src="returnImageUrl(card.schoolExperts[0].image)", alt="")
            img(v-else src="/img/non-logo.png")
          .logo__wrap
            img(v-if="card.logo" :src="returnImageUrl(card.logo)", alt="")
            img(v-else src="/img/non-logo.png")
            // img(src="/img/school/logo.jpg")
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
  methods: {
    returnImageUrl(src) {
      return functions.returnUrlPrefix() + '' + src
    },

    smallBody(string) {
      if (string.length > 200) {
        const indexStart = string.indexOf('>')
        const str = string.substring(199, 600)
        const index = str.indexOf('.')
        const newStr = string.substring(indexStart + 1, 200 + index)
        return `<p>${newStr}</p>`
      } else return string
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.row
  height: auto
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
  @media (max-width: 400px)
    padding: 12px
  &:hover
    box-shadow: 0px 3px 8px 0 rgba($blue, 0.3)
  .logo_card
    margin: 0 auto 10px
  .wrapper
    position: relative
    width: 328px
    height: 328px
    @media (max-width: 767px)
      width: 208px
      height: 208px
    // @media (max-width: 400px)
    //   width: 208px
    //   height: 208px
  .image__wrap
    position: absolute
    border-radius: 50%
    overflow: hidden
    margin: 0 auto
    top: 0
    left: 0
    right: 0
    bottom: 0
    img
      width: 100%
      height: auto
      object-fit: cover
      margin: 0 auto
  .logo__wrap
    position: absolute
    display: inline-block
    border-radius: 50%
    overflow: hidden
    margin: 0 auto
    width: 127px
    height: 127px
    top: 50%
    left: 0
    transform: translate(-50%, -50%)
    z-index: 10
    border: 1px solid #5551
    @media (max-width: 767px)
      width: 88px
      height: 88px
      top: 88%
      left: 50%
    img
      width: auto
      height: 100%
      margin: 0 auto
  .content_card
    width: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
    @media (max-width: 767px)
      text-align: center
      order: 2
  .card-title
    font-size: 26px
    font-family: $fira
    font-weight: 600
    font-style: normal
    font-stretch: condensed
    line-height: 1
    letter-spacing: normal
    text-align: left
    color: $blue
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 18px
      max-width: 94%
      margin-top: 15px
      margin-bottom: 16px
.card__footer
  margin: 30px 0
  display: flex
  @media (max-width: 767px)
    justify-content: center
    margin-top: 12px
    margin-bottom: 28px
.block__parags
  font-size: 16px
  font-weight: 500
  line-height: 1.625
  text-align: left
  color: $black
  margin-bottom: 30px
  @media (max-width: 767px)
    font-size: 14px
    padding: 0
    line-height: 1.5
    max-width: 95%
.detail
  &__row
    @media (max-width: 767px)
      display: flex
      flex-direction: column
      justify-content: space-between
  &__col
    @media (max-width: 767px)
      display: flex
      flex-wrap: wrap

.detail__title
  font-size: 16px
  font-weight: 600
  line-height: 1.625
  margin-bottom: 10px
  @media (max-width: 767px)
    font-size: 14px
    margin-right: 10px
    line-height: 1.5
  &--name
    margin-bottom: 10px
    @media (max-width: 767px)
      font-size: 14px
      margin-right: 10px
      line-height: 1.5
  &--role
    font-style: italic
    margin-bottom: 10px
    @media (max-width: 767px)
      font-size: 14px
      margin-right: 10px
      line-height: 1.5
  &--link
    color: $blue
    cursor: pointer
    text-decoration: underline
    @media (max-width: 767px)
      font-size: 14px
      margin-right: 10px
      line-height: 1.5
    &:hover
      text-decoration: none
</style>
