<template lang="pug">
  Modal(:classes="['modal', 'v--modal']" :name="event.id" width="900px" height="auto" :scrollable="true" @before-close="beforeClose")
    .modal__header
      .close(@click="closeModal(event.id)")
        i.icon.icon-close
        | Закрыть
      .copy(@click="copyToClickBord")
        i.icon.icon-copy
        | Скопировать ссылку
    .modal__content
      a(href="#").category Премия
      .flex
        .date {{date(event.createdAt)}}
        //- .view
        //-   i.icon.icon-view
        //-   | 2 378
      h2 {{event.title}}
      div.full-image(v-if="event.imagePath")
        img(:src="returnImageUrl(event.image)")
      //- .slider
      //-   swiper(:options="mySlider" ref="slider")
      //-     swiper-slide
      //-       img(src="/img/initiative/slider/1.jpg", alt="")
      //-     swiper-slide
      //-       img(src="/img/initiative/slider/1.jpg", alt="")
      //-     swiper-slide
      //-       img(src="/img/initiative/slider/1.jpg", alt="")
      //-     swiper-slide
      //-       img(src="/img/initiative/slider/1.jpg", alt="")
      //-     swiper-slide
      //-       img(src="/img/initiative/slider/1.jpg", alt="")
      //- .thumbs
      //-   swiper(:options="myThumbs" ref="thumbs")
      //-     swiper-slide.active(@click.native="changeSlide($event)" data-id="0")
      //-       img(src="/img/initiative/slider/thumbs-1.jpg", alt="")
      //-     swiper-slide(@click.native="changeSlide($event)" data-id="1")
      //-       img(src="/img/initiative/slider/thumbs-1.jpg", alt="")
      //-     swiper-slide(@click.native="changeSlide($event)" data-id="2")
      //-       img(src="/img/initiative/slider/thumbs-1.jpg", alt="")
      //-     swiper-slide(@click.native="changeSlide($event)" data-id="3")
      //-       img(src="/img/initiative/slider/thumbs-1.jpg", alt="")
      //-     swiper-slide(@click.native="changeSlide($event)" data-id="4")
      //-       img(src="/img/initiative/slider/thumbs-1.jpg", alt="")
      //-     swiper-slide(@click.native="changeSlide($event)" data-id="4")
      //-       img(src="/img/initiative/slider/thumbs-1.jpg", alt="")
      .modal_bottom(v-html="event.content")
      .share Поделиться с друзьями:
      Socials(
        :title="`Национальная премия 'Гражданская инициатива' - События премии и участников`"
      )
</template>

<script>
import Socials from '@/components/socials'
import { functions } from '@/modules'
import dayjs from 'dayjs'

export default {
  components: {
    Socials
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      mySlider: {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      },
      myThumbs: {
        slidesPerView: 9,
        breakpoints: {
          767: {
            slidesPerView: 4,
            spaceBetween: 5
          }
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
    // closeModal(name) {
    //   this.$modal.hide(name)
    //   this.$router.push('/events')
    // },
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
    },

    date(d) {
      const date = dayjs(d)
      return date.format('D.MM.YYYY')
    }
  }
}
</script>

<style lang="sass" scoped>
.full-image
  width: 100%
  margin-bottom: 50px

@media (max-width: 767px)
  .slider
    margin: 0 0 5px
    .swiper-container
      width: 100%
      img
        width: 100%
  .thumbs
    .swiper-container
      width: 100%
      img
        max-width: 100%
        margin: 0 auto
        display: block
  .modal_bottom
    margin: 40px 0 0
    h3
      font-size: 16px
</style>
