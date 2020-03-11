<template lang="pug">
  .project.desctop
    .project__top
      .container-fluid.container-padding
        .row.bottom-sm
          .col-sm-4
            h4 Специальный проект
            .heading
              h2 Школа<br>
                span гражданской <br>инициативы
          .col-sm-7.col-sm-offset-1
            p Познакомьтесь с уникальным опытом организации социальных проектов<br> участников Национальной премии «Гражданская Инициатива». Подробные<br> инструкции от экспертов, вопросы-ответы и материалы по теме.
            a.btn.btn-red(href="#") Смотреть все уроки
    .project__bottom
      .container-fluid.container-padding
        .white
          .row
            .col-xs-12
              swiper(:options="mySlider" ref="slider")
                swiper-slide
                  .slide
                    .slide__content
                      h2 Проект добрососедства и озеленения «Ёлки»
                      p В рамках этих акций очень важно постараться вовлечь в процесс посадки, ухаживания за деревом как можно больше детей и взрослых. Процесс посадки очень важен для развития детей, т. к. показывает пример командной работы родителей, эффективность совместных усилий.
                      a.btn.btn-red(href="#") Перейти к уроку
                    .slide__image
                      .slide__image__small
                        img(src="/img/home/project/small.png", alt="")
                      .slide__image__big
                        img(src="/img/home/project/big.png", alt="")
                    .slide__desc
                      h3 Эксперт:
                      p Мария Шардакова<br>
                        i Куратор проекта
                      h3 Категория:
                      a(href="#") Благоустройство
                      h3 Дата публикации урока:
                      p 7 марта 2019 года
                swiper-slide 2
                swiper-slide 3
              .thumbs
                swiper(:options="myThumbs" ref="thumbs")
                  swiper-slide.active(@click.native="changeSlide($event)" data-id="0")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="1")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="2")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="3")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="4")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="5")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="6")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="7")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="8")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="9")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="10")
                    img(src="/img/home/project/thumbs.png", alt="")
                  swiper-slide(@click.native="changeSlide($event)" data-id="11")
                    img(src="/img/home/project/thumbs.png", alt="")
                .swiper-button-prev
                .swiper-button-next
</template>

<script>
export default {
  data() {
    return {
      mySlider: {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      },
      myThumbs: {
        slidesPerView: 8,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    slider() {
      return this.$refs.slider.swiper
    },
    thumbs() {
      return this.$refs.thumbs.swiper
    }
  },
  mounted() {
    this.slider.slideTo(0, 1000, false)
  },
  methods: {
    changeSlide(event) {
      const i = event.currentTarget.getAttribute('data-id')
      this.slider.slideTo(i, 500, false)

      const slides = document.querySelectorAll('.swiper-slide')
      for (let y = 0; y < slides.length; y++) {
        slides[y].classList.remove('active')
      }
      event.currentTarget.classList.add('active')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.project
  &__top
    padding-top: 60px
    padding-bottom: 120px
    background: $blue
    color: $white
    h4
      font-family: $mont
      font-size: 18px
      font-weight: bold
      line-height: 1.67
      color: $white
      margin-bottom: 60px
      text-transform: uppercase
      margin-left: 100px
    .heading
      h2
        color: $white
        font-size: 132px
        line-height: 0.6
        height: 241px
        margin-left: 90px
        span
          font-size: 66px
    p
      font-family: $mont
      font-size: 18px
      font-weight: 500
      line-height: 1.67
      color: $white
      margin-bottom: 35px
      margin-left: 54px
    a
      margin-left: 54px
  &__bottom
    background-image: linear-gradient(to bottom, $blue, $very-light-pink-two)
    padding-bottom: 100px
    margin-top: -1px
    .white
      background: $white
      border-radius: 4px
      overflow: hidden
      box-shadow: 0px 13px 18px 0 rgba(0, 0, 0, 0.22)
    .slide
      padding: 72px 100px
      display: flex
      &__content
        width: 535px
        h2
          font-size: 44px
          font-family: $fira
          font-weight: 600
          font-stretch: condensed
          line-height: 1.18
          color: $black
          margin-bottom: 48px
        p
          font-family: $mont
          font-size: 18px
          font-weight: 500
          line-height: 1.67
          color: $black
          margin-bottom: 45px
      &__image
        width: 405px
        height: 405px
        position: relative
        margin-left: 140px
        margin-right: 80px
        &__small
          width: 127px
          height: 127px
          overflow: hidden
          border-radius: 50%
          position: absolute
          top: 50%
          left: -60px
          transform: translateY(-50%)
          img
            width: 100%
            height: 100%
            object-fit: cover
        &__big
          width: 405px
          height: 405px
          overflow: hidden
          border-radius: 50%
          img
            width: 100%
            height: 100%
            object-fit: cover
      &__desc
        h3, p, a
          font-family: $mont
          font-size: 18px
          line-height: 1.67
          text-align: left
          color: $black
        h3
          font-weight: bold
          margin-bottom: 5px
        p
          font-weight: 500
          margin-bottom: 30px
        a
          color: $blue
          margin-bottom: 30px
          display: block
    .thumbs
      background: #F2F2F2
      position: relative
      .swiper
        &-container
          width: 1200px
        &-slide
          position: relative
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
        &-button-prev, &-button-next
          background: none
          width: 80px
          height: 80px
          margin-top: -33px
        &-button-prev
          background: url(/img/ui/slider-prev.svg)
          background-size: cover
          left: 90px
        &-button-next
          background: url(/img/ui/slider-next.svg)
          background-size: cover
          right: 90px
      img
        width: 150px
        display: block
        cursor: pointer
</style>
