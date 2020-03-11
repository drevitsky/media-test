<template lang="pug">
  .content-laureate(v-if="!singleCity")
    <infinite-loading />
  .content-laureate(v-else)
    .heading
      h2.mob_ct {{ singleCity.name }}
    img.float(:src="returnImageUrl(singleCity.blazon)", alt="")
    div(v-html="singleCity.description" class="content")
    a(:href="singleCity.download" :download="singleCity.download" v-if="singleCity.download").red
      img(src="/img/laureate/press.png", alt="")
      | Пресс-релиз
    Slider(:slides="singleCity.images")
    //- .slider
    //-   swiper(:options="mySlider" ref="slider")
    //-     swiper-slide(v-for="(slide, s) in singleCity.images" :key="s")
    //-       img(:src="returnImageUrl(slide.name)", alt="")
    //-     .swiper-button-prev
    //-     .swiper-button-next
    //- a(href="").red
    //-   img(src="/img/laureate/photo.png", alt="")
    //-   | Полный фотоальбом с церемонии награждени
    .video(v-if="singleCity.youtube")
      .video__box
        iframe(width="100%" height="100%" :src="`https://www.youtube.com/embed/${singleCity.youtube}`" frameborder="0" allowfullscreen)
    .heading
      h2 Лауреаты {{ singleCity.name }} {{ $route.params.year }}
    .item_con
      .item(v-for="(item, i) in returnLaureates.laureates" :key="i")
        .row
          .col-sm-6
            p <b>В номинации «{{ item.initiative.category.name }}»</b> - {{ item.initiative.title }}
            p.light(v-html="item.description")
          .col-sm-6
            img(:src="item.initiative.imagePath", alt="")
    .nominate
      .heading
        h2 Номинанты и участники {{ singleCity.name }} {{ $route.params.year }}
      .col-sm-8.nominate__item(v-for="(item, i) in returnLaureates.nominantes" :key="i")
        h3 {{ item.initiative.category.name }}
        p {{ item.initiative.title }}
    .shared Поделиться с друзьями:
    Socials(
      :title="`Лауреаты и участники конкурсов 2013-2019 - г. ${singleCity.name}`"
    )
</template>

<script>
import { functions } from '@/modules'

import Slider from '@/components/years/slider'
import Socials from '@/components/socials'
import { mapState } from 'vuex'

export default {
  components: {
    Slider,
    Socials
  },
  computed: {
    ...mapState('laureate', ['singleCity']),

    returnLaureates() {
      const laureates = this.singleCity.cityInitiatives
      const list = {
        laureates: [],
        nominantes: []
      }

      laureates.forEach((item, i) => {
        if (item.laureate === true) {
          list.laureates.push(item)
        } else {
          list.nominantes.push(item)
        }
      })

      return list
    }
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
.heading
  margin-bottom: 35px
  .mob_ct
    @media (max-width: 767px)
      text-align: center
  h1
    color: $black
.video
  width: 100%
  position: relative
  max-width: 80%
  margin-left: auto
  margin-right: auto
  margin-bottom: 100px
  &__box
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
  &:before
    content: ''
    display: block
    padding-top: 56.25%
  @media (max-width: 767px)
    margin-bottom: 50px
  @media (max-width: 650px)
    max-width: 100%
.item
  padding: 40px 0
  position: relative
  &:after
    content: ''
    position: absolute
    width: 100vw
    height: 1px
    bottom: 0
    right: 0
    background: rgba($black, 0.1)
    @media (max-width: 767px)
      left: 0
      width: auto
  @media (max-width: 767px)
    padding: 35px 0 30px
  &:nth-of-type(even)
    .row
      flex-direction: row-reverse
      @media (max-width: 767px)
        flex-direction: column-reverse
  &:nth-of-type(odd)
    .row
      @media (max-width: 767px)
        flex-direction: column-reverse
  p
    font-size: 18px
    line-height: 32px
    @media (max-width: 767px)
      font-size: 14px
  p:last-of-type
    margin: 0
  img
    width: 360px
    object-fit: contain
    @media (max-width: 767px)
      // width: 100%
      margin: 0 0 30px
.item:first-child
  padding: 0 0 30px
hr
  width: 100vw
  position: relative
  left: -50px
  border-color: rgba($black, 0.1)
  @media (max-width: 767px)
    width: 100%
    left: 0
    margin: 0
.nominate
  padding-top: 60px
  @media (max-width: 767px)
    padding-top: 35px
  &__item
    margin-bottom: 40px
    h3, p
      font-size: 18px
      font-weight: 500
      font-style: normal
      font-stretch: normal
      line-height: 1.78
      letter-spacing: normal
      text-align: left
      color: $black
      margin-bottom: 0
      @media (max-width: 767px)
        font-size: 14px
    h3
      font-weight: 700
</style>
<style lang="sass">
@import '~assets/ui/vars'
.content-laureate
  padding-bottom: 30px
  .float
    width: 240px
    float: left
    margin-right: 50px
    margin-bottom: 30px
    @media (max-width: 767px)
      max-width: 180px
      margin: 0 auto 30px
      float: none
      display: block
  .content
    padding-right: 20px
    font-size: 18px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    line-height: 1.78
    letter-spacing: normal
    text-align: left
    color: $black
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 14px
      padding-right: 0
  p, a
    margin-bottom: 30px
    &:last-child
      margin-bottom: 0
    &.light
      color: $greyish-brown
    a
      display: inline-block !important
      margin-bottom: 0
  a
    display: block
    color: $blue
  .red
    color: $red
    display: flex
    align-items: center
    font-size: 20px
    font-weight: 700
    line-height: 1.3
    color: #df390f
    margin-bottom: 90px
    @media (max-width: 767px)
      font-size: 16px
      margin-bottom: 35px
    img
      width: 80px
      margin-right: 35px
      @media (max-width: 767px)
        width: 40px
        margin-right: 15px
</style>
