<template lang="pug">
  div
    header.header
      .top
        .container-fluid
          .row.middle-xs.header_mob
            .col-sm-4
              nuxt-link(to="/").logo
                .logo__image
                  img(
                    src="/img/header/logo.jpg"
                    srcset="/img/header/logo@2x.jpg 2x, /img/header/logo@3x.jpg 3x"
                    alt=""
                  )
                .logo__text
                  h1 Национальная премия
                    span Гражданская инициатива
            .col-sm-3.flex.end-sm.desctop
              a(href="#appeal" @click="openModal('appeal')").appeal.header__block
                img(
                  src="/img/header/appeal.jpg"
                  srcset="/img/header/appeal@2x.jpg 2x, /img/header/appeal@3x.jpg 3x"
                  alt=""
                  )
                p Обращение<br>Алексея Кудрина
            .col-sm-2.end-sm.flex.desctop
              a(href="#support" @click="openModal('support')").support.header__block
                img(
                  src="/img/header/support.jpg"
                  srcset="/img/header/support@2x.jpg 2x, /img/header/support@3x.jpg 3x"
                  alt=""
                )
                p Поддержка государства
                  span словом и делом
            .col-sm-3.end-sm.flex.desctop_flex
              a.btn.btn-red(href="#order_info" @click="openModal('order_info')") Предложить инициативу
      .nav
        .container-fluid
          .nav__box
            button(
              class="nav__toggle mobile"
              type="button"
            )
              i.fas.fa-bars.mob_menu_link.menu(v-if="!show" @click="show = !show" key="menu")
              i.fas.fa-times.mob_menu_link.clear(v-else @click="show = !show" key="clear")
            ul.nav__list.nav__list--left(v-show="show")
              li.nav__item(v-for="(item, i) in menu" :key="i")
                a.nav__link(v-if="item.modal" :href="`#${item.link}`" @click="openModal(item.link)")
                  span.nav__title {{ item.title }}
                  span.nav__desc {{ item.desc }}
                nuxt-link.nav__link(:to="item.link" v-else)
                  span.nav__title {{ item.title }}
                  span.nav__desc {{ item.desc }}
              li.nav__item.nav__item--mobile
                a(href="#appeal" @click="openModal('appeal')").appeal.header__block
                  img(
                    src="/img/header/appeal.jpg"
                    srcset="/img/header/appeal@2x.jpg 2x, /img/header/appeal@3x.jpg 3x"
                    alt=""
                    )
                  p Обращение<br>Алексея Кудрина
              li.nav__item.nav__item--mobile
                a(href="#support" @click="openModal('support')").support.header__block
                  img(
                    src="/img/header/support.jpg"
                    srcset="/img/header/support@2x.jpg 2x, /img/header/support@3x.jpg 3x"
                    alt=""
                  )
                  p Поддержка государства
                    span словом и делом
              li.nav__item.nav__item--mobile
                a.btn.btn-red.application_link(href="#order_info" @click="openModal('order_info')") Предложить инициативу
                nuxt-link.mobile_menu_link(to="/search") Поиск по инициативам
                a.mobile_menu_link(href="#") Вход
            ul.nav__list.nav__list--right
              li.nav__item(v-for="(item, i) in menu2" :key="i")
                a.nav__link(v-if="item.modal" :href="`#${item.link}`" @click="openModal(item.link)")
                  i.fas(:class="item.className")
                  span.nav__title {{ item.title }}
                  span.nav__desc {{ item.desc }}
                nuxt-link.nav__link(:to="item.link" v-else)
                  i.fas(:class="item.className")
                  span.nav__title {{ item.title }}
                  span.nav__desc {{ item.desc }}
    .bg-overlay(v-show="show")
</template>

<script>
export default {
  data() {
    return {
      show: false,
      menu: [
        {
          title: 'Главная',
          link: '/'
        },
        {
          title: 'Победители конкурсов',
          link: '/years/2019/39',
          desc: '2013-2019'
        },
        {
          title: 'События',
          link: '/events',
          desc: 'благосферы'
        },
        {
          title: 'Школа',
          link: '/school',
          desc: 'Гражданской инициативы'
          // modal: true
        },
        {
          title: 'Реестр',
          link: '/register',
          desc: 'организаторов инициатив'
        }
      ],
      menu2: [
        {
          title: 'Поиск',
          link: '/search',
          desc: 'по сайту',
          className: 'fa-search'
        },
        {
          title: 'Вход',
          link: 'login',
          desc: 'для организаторов',
          className: 'fa-user',
          modal: true
        }
      ]
    }
  },
  watch: {
    $route(to, from) {
      this.show = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
#navbar
  @media (min-width: 768px)
    display: block !important
.header
  z-index: 888
  position: relative
  background: $white
  .top
    padding: 9px 0
  &__block
    display: flex
    align-items: center
    font-family: $fira
    text-decoration: none
    img
      width: 60px
      height: 60px
      margin-right: 11px
    p
      font-size: 18px
      font-weight: 600
      font-stretch: condensed
      line-height: 1.31
      text-align: left
      color: $blue
      white-space: nowrap
.header_mob
  @media (max-width: 767px)
    justify-content: center
.appeal
  margin-right: 18px
.support
  margin-right: -58px
  p span
    font-size: 18px
    font-weight: 400
    color: $grey
    display: block
.logo
  display: flex
  flex-wrap: wrap
  align-items: center
  margin-left: -13px
  text-decoration: none
  &__image
    position: relative
    width: 110px
    margin-right: 8px
    @media (max-width: 767px)
      width: 80px
      margin-right: 0
    img
      width: 100%
  &__text
    h1
      font-size: 20px
      color: $grey
      font-family: $fira
      line-height: 1.42
      font-weight: normal
      @media (max-width: 767px)
        font-size: 14px
      span
        font-size: 24px
        color: $blue
        display: block
        text-transform: uppercase
        font-weight: 600
        line-height: 1.36
        @media (max-width: 767px)
          font-size: 17px

.nav
  position: relative
  background: $blue
  padding: 20px 0
  @media (max-width: 767px)
    height: 60px
  &__box
    display: flex
    align-items: center
    justify-content: space-between
  &__toggle
    display: none
    @media (max-width: 767px)
      display: block
      background: none
  &__list
    display: flex
    &--left
      @media (min-width: 768px)
        display: flex!important
      @media (max-width: 767px)
        position: absolute
        top: 60px
        left: 0
        width: 100%
        background: $white
        z-index: 15
        padding: 20px 20px 30px
        flex-direction: column
        margin: 0 0 15px
    &--right
      @media (max-width: 767px)
        .nav__link
          padding: 0
          margin: 0px 0px 0px 30px
          border-right: 0
          span
            display: none
  &__item
    &--mobile
      display: none
      @media (max-width: 767px)
        display: block
    &:first-child
      .nav__link
        padding-left: 0
    &:last-child, &:nth-child(5)
      .nav__link
        border-right: 0
        padding-right: 0
  &__link
    height: 100%
    padding: 0px 30px
    border-right: 1px solid rgba(255, 255, 255, .3)
    display: flex
    flex-direction: column
    line-height: 18px
    font-family: $firacond
    text-decoration: none
    .fas
      display: none
    @media (max-width: 767px)
      color: $white
      margin: 5px 0
      padding: 0
      .fas
        display: block
  &__title
    color: #fff
    font-size: 24px
    margin-bottom: 10px
    @media (max-width: 767px)
      color: $blue
      font-weight: bold
  &__desc
    color: $light-blue
    font-size: 18px
    @media (max-width: 767px)
      display: none
.application_link
  width: 100%
  margin: 15px 0
  font-size: 18px
  padding: 0
.mobile_menu_link
  font-size: 14px
  text-decoration: underline
  padding: 15px

.search
  line-height: 1.08
  margin-right: 35px
  font-family: $fira
  cursor: pointer
  color: $white
  text-decoration: none
  display: flex
  align-items: baseline
  @media (max-width: 767px)
    margin: 0 20px 0 0
  i
    font-size: 19px
    margin-right: 11px
    @media (max-width: 767px)
      font-size: 23px
.login
  color: white
  font-family: $fira
  line-height: 1.08
  text-decoration: none
.mob_menu_link
  @media (max-width: 767px)
    color: #fff
.clear
  margin: 0 3px
.bg-overlay
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(0,0,0,.5)
  z-index: 887
</style>
