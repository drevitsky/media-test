<template lang="pug">
  article.card-new
    a.card-new__link(:href="'#' + event.id" @click="openModal(event.id)")
      .card-new__image(:style="`background-image: url(${returnImageUrl(event.image)})`")
      .card-new__desc
        p.card-new__sort {{ sort === 'events' ? 'Конкурсант' : 'Премия' }}
        p.card-new__date
          | {{ date(event.createdAt) }}
          //- span
          //-   i.icon.icon-view
          //-   | {{ event.views }}
        p.card-new__text {{ event.title }}
    CardModal(:event="event")
  //- article.card
  //-   a(href="#").category.mobile {{ sort === 'events' ? 'Конкурсант' : 'Премия' }}
  //-   .card__image
  //-     a(:href="'#' + event.id" @click="openModal(event.id)").heading
  //-       img(:src="returnImageUrl(event.image)", alt="")
  //-   .card__content
  //-     a(href="#").category.desctop {{ sort === 'events' ? 'Конкурсант' : 'Премия' }}
  //-     .flex
  //-       .date {{date(event.createdAt)}}
  //-       .view
  //-         i.icon.icon-view
  //-         | {{ event.views }}
  //-     a(:href="'#' + event.id" @click="openModal(event.id)").heading
  //-       h1 {{event.title}}
</template>

<script>
import { functions } from '@/modules'
import dayjs from 'dayjs'
import CardModal from '~/components/events/cardModal.vue'

export default {
  components: {
    CardModal
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    sort: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.$modal.show(this.$route.hash.split('#')[1])
  },
  methods: {
    returnImageUrl(src) {
      return functions.returnUrlPrefix() + '' + src
    },

    date(d) {
      const date = dayjs(d)
      return date.format('D.MM.YYYY')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.card-new
  margin: 0px .5rem 60px
  background: $white
  border-radius: 4px
  box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
  height: 480px
  width: calc(100% / 4 - 1rem)
  @media (max-width: 767px)
    margin: 0 0 20px
    width: 100%
  &__link
    padding: 40px
    text-decoration: none
    display: block
    height: 100%
    color: $black
    @media (max-width: 767px)
      padding: 20px
  &__image
    width: 100%
    margin-bottom: 30px
    height: 209px
    background-position: 50%
    background-repeat: no-repeat
    background-size: cover
  &__desc
    display: flex
    flex-direction: column
  &__sort
    color: $red-3
    font-weight: bold
    font-size: 12px
    text-transform: uppercase
    margin-bottom: 15px
    letter-spacing: 3.6px
  &__date
    font-weight: bold
    font-size: 18px
    margin-bottom: 15px
    display: flex
    align-items: center
    span
      font-size: 14px
      color: #444444
      font-weight: 500
      margin-left: 23px
      display: flex
      align-items: center
      i
        margin-right: 9px
        font-size: 12px
  &__text
    font-weight: 500
    font-size: 16px
    line-height: 24px

// .card
//   padding: 40px 50px
//   border-top: 1px solid rgba($black, 0.5)
//   display: flex
//   flex-wrap: wrap
//   align-items: center
//   @media (max-width: 767px)
//     padding: 30px 0
//     flex-direction: column
//     align-items: flex-start
//   &:last-of-type
//     border-bottom: 1px solid rgba($black, 0.5)
//     margin-bottom: 40px
//   &__image
//     width: 230px
//     margin-right: 45px
//     border-radius: 4px
//     overflow: hidden
//     @media (max-width: 767px)
//       width: 100%
//       margin-right: 0
//     img
//       width: 230px
//       height: 100%
//       display: block
//       @media (max-width: 767px)
//         width: 100%
//   .category.mobile
//     text-transform: uppercase
//     font-size: 12px
//     font-weight: bold
//     font-family: $mont
//     line-height: 3
//     letter-spacing: 3.6px
//     text-align: left
//     color: $red
//     position: relative
//     text-decoration: none
//     margin: 0 0 10px
//   &__content
//     flex: 1
//     @media (max-width: 767px)
//       width: 100%
//       flex-direction: column-reverse
//       display: flex
//     h1
//       font-size: 26px
//       font-weight: 600
//       line-height: 1.15
//       letter-spacing: normal
//       text-align: left
//       color: $blue
//       padding-right: 300px
//       margin-top: 20px
//       @media (max-width: 767px)
//         padding-right: 0
//     .category
//       text-transform: uppercase
//       font-size: 12px
//       font-weight: bold
//       font-family: $mont
//       line-height: 3
//       letter-spacing: 3.6px
//       text-align: left
//       color: $red
//       position: relative
//       text-decoration: none
//     .flex
//       margin: 10px 0 0
//       justify-content: space-between
//     .date
//       font-size: 18px
//       font-family: $mont
//       font-weight: bold
//       line-height: 2
//       text-align: left
//       position: relative
//       color: $black
//     .view
//       position: relative
//       margin-left: 28px
//       display: flex
//       align-items: center
//       color: $greyish-brown
//       @media (max-width: 767px)
//         margin-left: 0
//       i
//         color: $greyish-brown
//         margin-right: 10px
.slider
  margin-bottom: 5px
  .swiper-container
    img
      width: 100%
.thumbs
  height: 100px
  position: relative
  .swiper-slide
    width: 70px !important
    height: 70px !important
    margin-right: 10px
    cursor: pointer
    &:before
      content: ''
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
      opacity: 0
      box-shadow: inset 0px 0px 0px 5px $red
      transition: all 0.3s
    &.active:before
      opacity: 1
  img
    width: 70px
    height: 70px
</style>
