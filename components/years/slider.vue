<template lang="pug">
  client-only
    .white(v-if="slides")
      .slider
        swiper(:options="mySlider" ref="slider")
          swiper-slide(v-for="(slide, s) in slides" :key="s")
            img(:src="returnImageUrl(slide.name)", alt="" height="350")
        .swiper-prev.mobile
          i.icon.icon-slider-prev
            .path2
        .swiper-next.mobile
          i.icon.icon-slider-next
            .path2
      .thumbs
        swiper(:options="myThumbs" ref="thumbs")
          swiper-slide(v-for="(item, i) in slides" :key="i" @click.native="changeSlide($event)" :data-id="i" :class="{ 'active': i === 0 }")
            img(:src="returnImageUrl(item.name)", alt="")
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
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mySlider: {
        slidesPerView: 1,
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
  methods: {
    returnImageUrl(src) {
      return functions.returnUrlPrefix() + '' + src
    },

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
// .slider
//   display: flex
//   justify-content: center
//   margin-bottom: 40px
//   .swiper-container
//     width: 900px
//     @media (max-width: 767px)
//       width: 100%
//     img
//       width: 900px
//       @media (max-width: 767px)
//         width: 100%
// .swiper-prev, .swiper-next
//   @media (max-width: 767px)
//     background-size: 18px 28px
//     //background: none
@import '~assets/ui/vars'
.white
  position: relative
  left: -50px
  width: 105%
  background-color: $white
  margin-bottom: 60px
  overflow: hidden
  @media (max-width: 767px)
    width: 100%
    left: 0
  .slider
    width: 100%
    height: 350px
    @media (max-width: 767px)
      position: relative
    img
      display: flex
      margin: 0 auto
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
    background-color: $white
    position: relative
    display: flex
    align-items: center
    max-width: 900px
    margin: 0 auto
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
      &.active:before
        opacity: 1
    img
      width: 70px
      height: 70px
.swiper-button-prev, .swiper-button-next
  background: none
  width: initial
  margin-top: -29px
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
