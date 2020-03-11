<template lang="pug">
  .intro
    .container-fluid
      .row
        .col-sm-3
          AppAside
        .col-sm-9
          .banner
            h1 <span>VIII</span> ежегодный конкурс гражданских<br> инициатив нацеленных на&nbsp;повышение качества<br> общественной жизни в&nbsp;России.
            a(href="#").about О конкурсе 2020 года
            .flex.mobile.apply_link
              a.btn.btn-red.application_link(href="#order_info" @click="openModal('order_info')") Предложить инициативу
            .flex
              .column
                a.btn.btn-blue.search(href="#") Найдите действующие инициативы в своём регионе <i class="fas fa-search"></i>
                nuxt-link.block2(to="/years/2020/36")
                  .image
                    img(src="/img/home/step/herb-3.png")
                  .desc
                    h2 Томск
                    p Информация о ближайшем региональном конкурсе 2020 года.
                  .arrow
                    img(src="/img/home/intro/arrow-circle.svg", alt="")
                nuxt-link.block2(to="/years/2019")
                  .image
                    img(src="/img/laureate.png")
                  .desc
                    h2 Церемония вручения премии за 2019 год
                    p Победители федерального конкурса.
                  .arrow
                    img(src="/img/home/intro/arrow-circle.svg", alt="")
              .quote.desctop
                p «Встал поутру, умылся, привел себя в порядок —<br> и сразу же приведи в порядок свою планету.»
                span Антуан де Сент-Экзюпери, «Маленький принц»
            .banner__image.mobile
        .col-xs-12.desctop
          hr
</template>

<script>
import { mapState, mapActions } from 'vuex'

import AppAside from '~/components/ui/AppAside'

export default {
  components: {
    AppAside
  },
  computed: {
    ...mapState('statistic', [
      'totalNominations',
      'totalInitiatives',
      'totalVotes',
      'totalRegions',
      'totalComments'
    ])
  },
  mounted() {
    // this.getStatistic()
  },
  methods: {
    ...mapActions('statistic', [
      'getTotalNominations',
      'getTotalInitiatives',
      'getTotalVotes',
      'getTotalRegions',
      'getTotalComments'
    ]),

    getStatistic() {
      this.getTotalNominations()
      this.getTotalInitiatives()
      this.getTotalVotes()
      this.getTotalRegions()
      this.getTotalComments()
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.intro
  overflow-x: hidden
  hr
    margin: 0
    border: 1px solid
    border-bottom: 0
  .row
    @media (max-width: 767px)
      flex-direction: column-reverse
  .flex
    flex-wrap: wrap
    align-items: flex-end
// .aside
//   padding-top: 34px
//   width: 270px
//   @media (max-width: 767px)
//     width: 100%
//   h2
//     font-size: 25px
//     font-weight: 600
//     margin-bottom: 15px
//   a
//     font-size: 16px
//     font-weight: 500
//     font-family: $mont
//     color: $blue
//     text-decoration: none
//     &:hover
//       text-decoration: underline
.banner
  padding-top: 63px
  width: 105%
  background-image: url(/img/home/intro/banner.jpg)
  background-size: cover
  background-position: 88% 50%
  margin-left: -10px
  @media (max-width: 767px)
    margin-left: -4%
    width: 108%
    display: flex
    flex-direction: column
    padding: 300px 4% 4%
    background-size: 800px
    background-repeat: no-repeat
    background-position: 82% 0%
    background: none
    padding-top: 25px
  h1
    font-size: 32px
    font-family: $firacond
    font-weight: 600
    line-height: 36px
    color: $black-2
    letter-spacing: -1.7px
    margin-bottom: 44px
    @media (max-width: 767px)
      font-size: 24px
      font-weight: normal
      margin-bottom: 25px
      br
        display: none
    span
      font-size: 55px
      color: $blue
      @media (max-width: 767px)
        font-size: 35px
        font-weight: 600
  .about
    @media (max-width: 767px)
      display: none
  .apply_link
    @media (max-width: 767px)
      margin: 0 auto 30px
    a
      @media (max-width: 767px)
        text-align: center
        width: 295px
        font-size: 18px
        line-height: 18px
        height: 55px
  > p
    font-size: 18px
    font-weight: 500
    line-height: 1.56
    color: $greyish-brown
    font-family: $mont
    position: relative
    padding-left: 97px
    margin-bottom: 42px
    @media (max-width: 767px)
      order: 3
      font-size: 14px
      margin: 25px 0 0
      padding: 0
    &:before
      content: ''
      background-image: url(/img/home/intro/arrow-line.svg)
      width: 123px
      height: 42px
      display: block
      background-size: cover
      position: absolute
      top: 50%
      transform: translateY(-50%)
      left: -50px
      @media (max-width: 767px)
        display: none
  > a
    font-size: 22px
    font-weight: 600
    font-family: $fira
    color: $blue
    // letter-spacing: 0.5px
    display: inline-block
    margin-bottom: 44px
    @media (max-width: 767px)
      order: 2
      font-size: 16px
      margin: 25px 0 25px
      text-align: center
  &__image
    display: none
    background-image: url(/img/home/intro/banner.jpg)
    background-position: 75%
    background-size: cover
    height: 360px
    margin-left: -4%
    margin-right: -4%
.column
  display: flex
  flex-direction: column
  .search
    display: flex
    justify-content: space-between
    font-size: 16px
    margin-bottom: 30px
    padding: 3px 24px 3px 20px
    height: auto
    opacity: 0
    @media (max-width: 767px)
      display: none
    .fa-search
      font-size: 19px
      margin-right: 0
  .block2
    background: $white
    height: 117px
    width: 565px
    box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
    border-radius: 4px
    display: flex
    align-items: center
    margin-bottom: 20px
    padding: 0px 40px 0 25px
    text-decoration: none
    &:last-child
      margin-bottom: 130px
    @media (max-width: 767px)
      width: 100%
      height: auto
      padding: 20px 5px 20px 10px
      &:last-child
        margin-bottom: 20px
    .image
      flex: 0 0 auto
      height: 90px
      width: 90px
      border-radius: 50%
      display: flex
      align-items: center
      justify-content: center
      @media (max-width: 767px)
        width: 62px
      img
        max-height: 100%
    .desc
      margin: 0px 20px
      flex: 1 1 auto
      @media (max-width: 767px)
        margin: 0px 0px 0px 10px
      h2
        font-size: 20px
        font-weight: 700
        font-family: $mont
        line-height: 24px
        margin-bottom: 10px
        color: $black
        position: relative
        display: flex
        align-items: center
        @media (max-width: 767px)
          font-size: 14px
          line-height: 22px
          margin-bottom: 10px
      p
        font-size: 16px
        font-family: $mont
        font-weight: 500
        line-height: 1.5
        color: $greyish-brown
        position: relative
        @media (max-width: 767px)
          font-size: 14px
          line-height: 20px
    .arrow
      flex: 0 0 auto
      @media (max-width: 767px)
        display: none

.block
  background: $white
  height: 200px
  width: 565px
  box-shadow: 0px 7px 6.7px 0.4px rgba(6, 27, 87, 0.17)
  border-radius: 4px
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  padding: 0 40px
  margin-bottom: 48px
  overflow: hidden
  &:before
    content: ''
    display: block
    width: 359px
    height: 200px
    background-image: url(/img/home/intro/mount.png)
    right: 0
    top: 0
    position: absolute
  h2
    font-size: 20px
    font-weight: 700
    font-family: $mont
    line-height: 2.4
    color: $black
    position: relative
    display: flex
    align-items: center
    img
      width: 32px
      height: 32px
      margin-left: 20px
  p
    font-size: 16px
    font-family: $mont
    font-weight: 500
    line-height: 1.5
    color: $greyish-brown
    position: relative
  &__years
    display: flex
    // justify-content: space-between
    // width: 56%
    position: relative
    top: 8px
    a
      margin-right: 10px
      font-size: 16px
      font-family: $mont
      font-weight: 600
      line-height: 3
      color: $blue
      text-decoration: none
      &:last-child
        margin-right: 0
.quote
  margin-left: 85px
  flex: 1
  padding-bottom: 130px
  p
    font-size: 18px
    font-weight: 500
    font-family: $mont
    line-height: 1.56
    color: $greyish-brown
    margin-bottom: 17px
  span
    font-size: 16px
    font-weight: 600
    font-family: $mont
    color: $greyish-brown
.statistics
  display: flex
  justify-content: space-between
  width: 80%
  p
    font-size: 18px
    font-family: $mont
    font-weight: 500
    line-height: 1.44
    text-align: left
    color: $black
    b
      font-weight: 900
</style>
