<template lang="pug">
  .container-fluid
      .row.row__wrap
        .col-sm-8.col-xs-12
          h1.lesson-title {{ lessons.name }}
          .region__wrap
            // .region Московская область, г. Электросталь
            .view.desctop
              i.icon.icon-view
              span 12
            // {{ lessons.views }}
          // .category__wrap
          //   span.category Категория урока :
          //   span.category__name Благоустройство
          .social__wrap.desctop
            Socials()
          article.article
            main
              .block.without-line.pb-0
                h2 {{ lessons.schoolArticles[0].title}}
                .block__content.big-size
                  p(v-html="lessons.schoolArticles[0].content")
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              .block.without-line.mobile
                .view.mobile
                  .view__mobile
                    .view__link
                      a(href="#") Поделиться уроком
                    .view__wrap
                      // i.icon.icon-view
                      span.view__count 12
                .wrapper
                  .image__wrap
                    img(v-if="lessons.schoolExperts[0].image" :src="returnImageUrl(lessons.schoolExperts[0].image)", alt="")
                    img(v-else src="/img/non-logo.png")
                  .logo__wrap
                    img(v-if="lessons.logo" :src="returnImageUrl(lessons.logo)", alt="")
                    img(v-else src="/img/non-logo.png")
                    // img(src="/img/school/logo.jpg")
                .detail__wrap
                  .detail__title Эксперт
                  .detail__title--name {{ lessons.schoolExperts[0].name}}
                  .detail__title--role {{ lessons.schoolExperts[0].role}}
                  nuxt-link(:to="`/lessons/${lessons.id}`").btn.btn-red.btn__contact Контактная информация
                  .lesson__link__wrap
                    .lesson__link__text Перейти на страницу иннициативы:
                    a(href="#").lesson__link {{ lessons.name }}
              .block
                .questions
                  .questions__header Вопросы и ответы
                  .question(v-for="(quest, i) in lessons.schoolQuestions" :key="i" )
                    .question__header.accordion-item-head(@click="accordion")
                      .question__id {{ i + 1 }}
                      .question__title {{ quest.titleQuestion }}
                      span.question__arrow
                    .question__body.accordion-item-body(v-html="quest.contentAnswer")
              Slider(:images="lessons.schoolGalleries" v-if="lessons.schoolGalleries.length > 0")
        .col-sm-4.desctop
          .wrapper
            .image__wrap
              img(v-if="lessons.schoolExperts[0].image" :src="returnImageUrl(lessons.schoolExperts[0].image)", alt="")
              img(v-else src="/img/non-logo.png")
            .logo__wrap
              img(v-if="lessons.logo" :src="returnImageUrl(lessons.logo)", alt="")
              img(v-else src="/img/non-logo.png")
              // img(src="/img/school/logo.jpg")
          .detail__wrap
            .detail__title Эксперт
            .detail__title--name {{ lessons.schoolExperts[0].name}}
            .detail__title--role {{ lessons.schoolExperts[0].role}}
            nuxt-link(:to="`/lessons/${lessons.id}`").btn.btn-red Контактная информация
            .lesson__link__wrap
              .lesson__link__text Перейти на страницу иннициативы:
              a(href="#").lesson__link {{ lessons.name }}
      allSchools
</template>

<script>
import { functions } from '@/modules'
import u from 'umbrellajs'
import Socials from '~/components/socials'
import Slider from '~/components/initiative/slider'
import allSchools from '~/components/school/allSchools'

export default {
  components: {
    Socials,
    Slider,
    allSchools
  },
  data() {
    return {
      questions: []
    }
  },
  async asyncData({ params, $axios, $route }) {
    const { data } = await $axios.get(
      `https://old.premiagi.ru/api/schools/${params.id}`
    )
    return { lessons: data }
  },
  mounted() {
    const blocks = document.querySelectorAll('.block')
    blocks.forEach((el) => {
      let sumHeight = 0
      el.querySelectorAll('p').forEach((el) => {
        sumHeight += el.offsetHeight
      })
      if (sumHeight > 200) {
        u(el).addClass('overflow')
        u(el)
          .find('.btn')
          .addClass('d-inline-flex')
      }
    })
  },
  methods: {
    accordion(event) {
      const matches = document.querySelectorAll('.accordion-item-head')
      for (let i = 0; i < matches.length; i++) {
        if (matches[i] !== event.target.closest('.accordion-item-head')) {
          matches[i].classList.remove('active')
        }
      }
      event.target.closest('.accordion-item-head').classList.toggle('active')
      const e = event.target.closest('.accordion-item-head')
      this.scrollPage(e)
    },
    returnImageUrl(src) {
      return functions.returnUrlPrefix() + '' + src
    },
    scrollPage(e) {
      // const block = document.querySelector('#start')
      const coordY = this.getCoords(e)
      window.scrollTo(0, coordY.top, { behavior: 'smooth' })
    },
    getCoords(elem) {
      const box = elem.getBoundingClientRect()
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      }
    },
    toggleMore(event) {
      if (u(event.currentTarget).text() === 'Развернуть весь текст') {
        u(event.currentTarget)
          .find('i')
          .addClass('active')
        u(event.currentTarget)
          .find('span')
          .text('Свернуть')
        u(event.currentTarget)
          .siblings('.block__content')
          .addClass('all')
        return
      }
      u(event.currentTarget)
        .find('i')
        .removeClass('active')
      u(event.currentTarget)
        .find('span')
        .text('Развернуть весь текст')
      u(event.currentTarget)
        .siblings('.block__content')
        .removeClass('all')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.row__wrap
  padding-top: 54px
  @media (max-width: 767px)
    justify-content: center
.lesson-title
  font-size: 44px
  font-weight: 500
  color: $blue
  font-family: $fira
  margin-bottom: 20px
  margin-top: 70px
  @media (max-width: 767px)
    font-size: 22px
    margin-top: 0
.region
  margin-bottom: 16px
  margin-right: 45px
  &__wrap
    display: flex
    color: #666
    font-size: 16px
    line-height: 1.5
  @media (max-width: 767px)
    margin: 0 0 14px 0
.view__mobile
  display: flex
  justify-content: space-between
  margin-bottom: 24px
.view__wrap
  display: inline-block
.view__count
  line-height: 16px
  position: relative
  display: inline-block
  &:before
    content: ''
    position: absolute
    width: 25px
    height: 15px
    left: -33px
    background-image: url(/img/school/view.svg)
.icon-view
  margin-right: 16px
  line-height: 16px
.category
  font-weight: 600
  &__wrap
    margin-bottom: 60px
    @media (max-width: 767px)
      margin-bottom: 33px

  &__name
    font-weight: 400
    color: $blue
    text-decoration: underline
    margin-left: 10px
    &:hover
      text-decoration: none
.article
  margin-top: 58px
  @media (max-width: 767px)
      margin-top: 33px
.accordion-item-head
  transition: all 0.6s
.accordion-item-body
  display: none
  font-weight: 500
  font-size: 18px
  line-height: 32px
  @media (max-width: 767px)
    font-size: 14px
    line-height: 1.5
.accordion-item-head.active
  padding-top: 38px
  @media (max-width: 767px)
    padding-top: 21px
  .question__arrow
    transform: rotate(180deg)
  &:hover
    background-color: #fff
.accordion-item-head.active + .accordion-item-body
  display: block !important
.questions
  border-radius: 5px
  box-shadow: 0 3px 8px $charcoal-grey-10
  &__header
    font-size: 44px
    font-family: $fira
    font-weight: 600
    color: #fff
    background-color: $blue
    padding: 35px 48px
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    @media (max-width: 767px)
      font-size: 22px
      line-height: 43px
      padding: 8px 21px
.question
  border-bottom: 1px solid $very-light-pink-three
  margin-bottom: 1px
  background-color: #fff
  transition: all 0.6s
  &:last-child
    border-bottom-left-radius: 5px
    border-bottom-right-radius: 5px
  &__header
    display: flex
    padding: 9px 48px
    font-size: 18px
    font-weight: 700
    cursor: pointer
    position: relative
    align-items: center
    @media (max-width: 767px)
      padding: 9px

    &:hover
      background-color: $very-light-pink-two
  &__id
    border-radius: 50%
    background-color: $blue
    width: 50px
    height: 50px
    min-width: 50px
    color: #fff
    text-align: center
    line-height: 50px
    @media (max-width: 767px)
      width: 40px
      height: 40px
      min-width: 40px
      line-height: 40px
  &__title
    line-height: 30px
    padding-left: 29px
    @media (max-width: 767px)
      padding: 9px
      width: calc(100% - 75px)
      font-size: 14px
      line-height: 1.15
  &__body
    padding: 30px 48px
    transition: all 0.6s
    @media (max-width: 767px)
      padding: 10px 20px
  &__arrow
    background-image: url(/img/school/akk_arrow.svg)
    width: 22px
    height: 13px
    position: absolute
    right: 48px
    transition: all 0.6s
    @media (max-width: 767px)
      right: 9px
.block__parags
  p
    font-size: 18px
    font-weight: 500
    line-height: 1.83
    text-align: left
    color: $black
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 14px
.wrapper
  position: relative
  width: 400px
  height: 400px
  margin: 0 auto
  @media (max-width: 767px)
    width: 208px
    height: 208px
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
.detail__wrap
  display: flex-wrap
  text-align: center
  margin-top: 44px
.detail__title
  font-size: 16px
  font-weight: 600
  line-height: 1.625
  margin-bottom: 10px
  @media (max-width: 767px)
    font-size: 14px
  &--name
    margin-bottom: 10px
    @media (max-width: 767px)
      font-size: 14px
  &--role
    font-style: italic
    margin-bottom: 37px
    @media (max-width: 767px)
      font-size: 14px
  &--link
    color: $blue
    cursor: pointer
    text-decoration: underline
    @media (max-width: 767px)
      font-size: 14px
    &:hover
      text-decoration: none
.lesson__link__wrap
  margin: 37px auto 0
  font-size: 16px
  line-height: 26px
  max-width: 320px
  @media (max-width: 767px)
    margin-top: 19px
    font-size: 14px
</style>

<style lang="sass" scoped>
@import '~assets/ui/vars'

.block
  padding-bottom: 40px
  margin-bottom: 50px
  border-bottom: 1px solid grey
  @media (max-width: 767px)
    padding-bottom: 30px
    margin-bottom: 30px
    display: flex
    flex-direction: column
  &__content
    &.hide
      display: none
  &.without-line
    border: none
  &__image
    width: 120px
    height: 120px
    overflow: hidden
    border-radius: 50%
    margin-right: 50px
    margin-bottom: 40px
    background: url('/img/guest.jpg')no-repeat 50% / cover
    @media (max-width: 767px)
      min-width: 70px
      width: 70px
      height: 70px
      margin-right: 15px
      margin-bottom: 0
    img
      width: 100%
      height: 100%
      object-fit: cover
  h4
    margin-bottom: 40px
    font-size: 20px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    line-height: 1.3
    letter-spacing: normal
    text-align: left
    color: $black
    @media (max-width: 767px)
      font-size: 16px
      align-self: center
      margin-bottom: 0
  h2
    font-size: 28px
    font-family: $fira
    font-weight: 600
    line-height: 1.43
    text-align: left
    color: $black
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 22px
    a
      color: $blue
  h3
    margin-bottom: 35px
  p
    font-size: 18px
    font-weight: 500
    line-height: 1.83
    text-align: left
    color: $black
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 14px
  .link
    font-weight: 500
  .btn
    // display: none
    &.d-inline-flex
      display: inline-flex
      @media (max-width: 767px)
        align-self: center
      i
        transition: all 0.3s
        &.active
          transform: rotate(-180deg)
          top: -1px
  &.video-overflow
    .block__content
      max-height: 500px
      overflow: hidden
      margin-bottom: 20px
      &.all
        max-height: none
  &.overflow
    .block__content
      max-height: 200px
      overflow: hidden
      margin-bottom: 20px
      position: relative
      transition: all 1s
      @media (max-width: 767px)
        max-height: 150px
      &:before
        content: ''
        background-color: rgba(242,242,242,1)
        background: linear-gradient(to bottom, rgba(242,242,242,0.5) 0%, rgba(242,242,242,1) 100%);
        width: 100%
        height: 70px
        opacity: 1
        position: absolute
        bottom: 0
        left: 0
        transition: all 1s
      &.all
        max-height: 1000px
        &:before
          opacity: 0
.pb-0
  padding-bottom: 0
.btn__contact
  @media (max-width: 767px)
    font-size: 14px
</style>
