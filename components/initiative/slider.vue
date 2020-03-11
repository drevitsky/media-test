<template lang="pug">
  client-only
    .white
      .slider
        swiper(:options="mySlider" ref="slider")
          swiper-slide(v-for="(item, i) in images" :key="i")
            img(:src="returnImageUrl(item.image)", alt="")
        .swiper-prev.mobile
          i.icon.icon-slider-prev
            .path2
        .swiper-next.mobile
          i.icon.icon-slider-next
            .path2
      .thumbs
        swiper(:options="myThumbs" ref="thumbs")
          swiper-slide(v-for="(item, i) in images" :key="i" :data-id="i")
            img(:src="returnImageUrl(item.image)", alt="")
        .swiper-button-prev
          i.icon.icon-slider-prev
            .path1
            .path2
        .swiper-button-next
          i.icon.icon-slider-next
            .path1
            .path2
</template>
<script>
import { functions } from '@/modules'

export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mySlider: {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 5,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }
      },
      myThumbs: {
        slidesPerView: 5,
        loop: true,
        loopedSlides: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slideToClickedSlide: true
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
    this.$nextTick(() => {
      const swiperTop = this.$refs.slider.swiper
      const swiperThumbs = this.$refs.thumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
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
.white
  border-radius: 5px
  box-shadow: 0px 13px 18px 0 #c1c2c5
  background-color: $white
  margin-bottom: 60px
  overflow: hidden
  .slider
    width: 100%
    height: 350px
    @media (max-width: 767px)
      position: relative
    @media (max-width: 480px)
      height: 250px
    img
      display: flex
      margin: 0 auto
      height: 350px
      @media (max-width: 480px)
        height: 250px
  .swiper-prev, .swiper-next
    position: absolute
    top: 38%
    left: 0
    width: 100px
    height: 100px
    z-index: 10
    i
      display: flex
      font-size: 100px
    .path2:before
      @media (max-width: 767px)
        color: #fff
        margin: 0
  .swiper-next
    left: inherit
    right: 0
  .swiper-button-disabled
    opacity: 0.5
  .thumbs
    height: 100px
    background-color: $very-light-pink-two
    position: relative
    display: flex
    align-items: center
    @media (max-width: 767px)
      display: none
    .swiper-container
      width: 400px
    .swiper-slide
      display: flex
      justify-content: center
      width: 70px !important
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
      &.swiper-slide-active:before
        opacity: 1
    img
      width: 70px
      height: 70px
      object-fit: cover
.swiper-button-prev, .swiper-button-next
  background: none
  width: initial
  margin-top: 10px
  top: 0
  @media (max-width: 767px)
    margin-top: -40px
  i
    display: flex
    font-size: 100px
    // .path2:before
    //   color: #666666
.swiper-button-prev
  left: 40px
  @media (max-width: 767px)
    left: 85px
.swiper-button-next
  right: 40px
  @media (max-width: 767px)
    right: -15px
</style>
