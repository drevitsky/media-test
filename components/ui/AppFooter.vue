<template lang="pug">
  footer.footer
    .footer__top
      .container-fluid.container-padding
        .row
          .col-xs-12
            h2 Подписка на новости
            p Только важные новости конкурса
            form
              input(type="email" placeholder="Ваша электронн@я почта")
              button.btn.btn-red(type="submit") Подписаться
            ul
              li
                a(href="#") Конкурс 2020 года
              li
                nuxt-link(to="/years") Лауреаты 2013-2019
              li
                a(href="#position" @click="openModal('position')") Положение о Федеральной и Региональной премиях
              //- li
                a(href="#") Положение о Региональных премиях
              li
                a(href="#expert" @click="openModal('expert')") Экспертный совет
              li
                a(href="#jury" @click="openModal('jury')") Большое жюри
              li
                a(href="#contact" @click="openModal('contact')") Контакты организационного комитета
            .social
              h2 Поделиться с друзьями:
              Socials
            .copyright © 2020 «Гражданская Инициатива»
    .footer__bottom
      .container-fluid.container-padding
        .row
          .col-sm-6
            a(href="#school" @click="openModal('school')").block
              .block__image
                img(src="/img/footer/1.svg", alt="")
              .block__content
                h3 Школа гражданских инициатив
                  img(src="/img/ui/arrow-circle.svg", alt="")
                p Познакомьтесь с уникальным опытом организации<br> социальных проектов участников Национальной<br> премии «Гражданская Инициатива».
          .col-sm-6
            nuxt-link(to="/register").block
              .block__image
                img(src="/img/footer/2.svg", alt="")
              .block__content
                h3 Уникальный реестр организаторов
                  img(src="/img/ui/arrow-circle.svg", alt="")
                p На сегодняшний день самая полная база<br> данных о действующих социальных проектах<br> с реальными людьми и результатами.
</template>

<script>
import Socials from '@/components/socials'

export default {
  components: {
    Socials
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.footer
  &__top
    padding-top: 100px
    position: relative
    overflow: hidden
    @media (max-width: 767px)
      background: url(/img/footer/bg.png)
      background-repeat: no-repeat
      background-size: 600px
      background-position: 30% 100%
      padding-top: 20px
    &:before
      content: ''
      width: 1350px
      height: 910px
      background: url(/img/footer/bg.png)
      background-size: cover
      position: absolute
      top: 0px
      right: 0
      display: block
      @media (max-width: 767px)
        display: none
    h2
      font-family: $mont
      font-size: 20px
      font-weight: bold
      line-height: 1.3
      text-align: left
      color: $black
      @media (max-width: 767px)
        font-size: 16px
    p
      font-family: $mont
      font-size: 16px
      font-weight: 500
      line-height: 1.63
      text-align: left
      color: $greyish-brown
      @media (max-width: 767px)
        font-size: 14px
    form
      height: 50px
      margin-bottom: 42px
      margin-top: 23px
      @media (max-width: 767px)
        display: flex
        margin-bottom: 20px
      input
        font-family: $mont
        border-radius: 4px
        border: solid 1px $very-light-pink-three
        background-color: $white
        height: 100%
        font-weight: 500
        width: 335px
        padding-left: 20px
        font-size: 16px
        @media (max-width: 767px)
          width: 100%
          font-size: 12px
          padding-left: 10px
      button
        position: relative
        left: -20px
        padding: 0 20px
        font-size: 16px
        @media (max-width: 767px)
          left: 0
          padding: 0 3px
          font-size: 12px
    ul
      margin-bottom: 36px
      li
        a
          font-family: $mont
          font-size: 18px
          font-weight: 500
          line-height: 2.11
          text-align: left
          color: $blue
          margin-bottom: 42px
          @media (max-width: 767px)
            font-size: 14px
    .social
      margin-bottom: 35px
      @media (max-width: 767px)
        display: none
      h2
        margin-bottom: 15px
    .copyright
      margin-bottom: 35px
      font-family: $mont
      font-size: 16px
      font-weight: 500
      line-height: 3
      text-align: left
      color: #666666
      @media (max-width: 767px)
        line-height: 1
        color: #fff
        font-size: 12px
        margin: 250px 0 25px
  &__bottom
    background: $blue
    padding: 45px 0
    @media (max-width: 767px)
      padding: 20px 0
    .block
      display: flex
      align-items: center
      @media (max-width: 767px)
        flex-direction: column
        margin: 25px 0
      &__image
        margin-right: 30px
        @media (max-width: 767px)
          margin-right: 0
        img
          width: 100px
      &__content
        h3
          font-family: $mont
          font-size: 20px
          font-weight: bold
          line-height: 2.4
          text-align: left
          color: $white
          display: flex
          align-items: center
          @media (max-width: 767px)
            line-height: 1.2
            font-size: 18px
            margin: 20px 0 15px
          img
            width: 32px
            height: 32px
            margin-left: 13px
            @media (max-width: 767px)
              min-width: 32px
        p
          font-family: $mont
          font-size: 16px
          font-weight: 500
          line-height: 1.5
          text-align: left
          color: $white
          @media (max-width: 767px)
            font-size: 12px
          br
            @media (max-width: 767px)
              display: none
</style>
