<template lang="pug">
  .intro
    .row
      .col-sm-5.col-xs-12.img_con
        img.planets(:src="nomination.img", alt="")
      .col-sm-7.ml
        .heading
          h1 {{nomination.title}}
        p {{nomination.desc}}
        //- .intro__expert
        //-   .intro__expert__image
        //-     img(src="/img/catalog/intro/expert.jpg", alt="")
        //-   .intro__expert__content
        //-     p
        //-       b Эксперт номинации:
        //-       |  {{nomination.expert}}
        //-     a(href="#") Об экспертах конкурса
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    nomination() {
      return this.$store.getters['nominations/getSingleNomination'](+this.id)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.intro
  background: url(/img/catalog/intro/bg.jpg)
  background-size: cover
  margin-left: 40px
  padding-top: 67px
  height: 450px
  margin-bottom: 50px
  .img_con
    justify-content: center
    display: flex
  @media (max-width: 767px)
    margin: 20px -5%
    height: auto
    width: 110%
    // height: 350px
  .ml
    margin-left: -50px
    @media (max-width: 767px)
      margin: 0 4%
      width: 100%
  .planets
    height: 450px
    position: relative
    left: 33px
    top: -50px
    @media (max-width: 767px)
      width: 100%
      left: 0
      max-width: 320px
      // display: none
  .heading h1
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 22px
  p
    font-family: $mont
    font-size: 18px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    line-height: 1.63
    letter-spacing: normal
    text-align: left
    color: $black
    @media (max-width: 767px)
      font-size: 14px
  &__expert
    display: flex
    flex-wrap: wrap
    align-items: center
    margin-top: 35px
    @media (max-width: 767px)
      flex-direction: column
    &__image
      width: 100px
      height: 100px
      border-radius: 50%
      overflow: hidden
      margin-right: 25px
      @media (max-width: 767px)
        margin: 0 0 15px
      img
        width: 100%
        height: 100%
        object-fit: cover
    &__content
      flex: 1
      p
        margin-bottom: 5px
        padding-right: 50px
        font-size: 16px
        @media (max-width: 767px)
          padding-right: 0
          font-size: 14px
      a
        color: $blue
        text-decoration: none
        font-family: $mont
        font-weight: 500
</style>
