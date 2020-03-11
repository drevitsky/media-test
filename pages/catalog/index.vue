<template lang="pug">
  .catalog
    .container-fluid
      .row
        .col-sm-2.col-xs-12.list_nom
          AppAside
        .col-sm-10.col-xs-12.catalog_mon(v-if="list")
          Intro
          .sort.pl
            p.mobile.all_initiative Всего {{initiative.length}} инициатив
            h3.menu(v-if="!show" @click="show = !show" key="menu") Сортировка:
            h3.clear(v-else @click="show = !show" key="clear") Сортировка:
            .radio(v-show="show")
              .radio__block
                input#sort-1(type="radio" name="sort" checked)
                label(for="sort-1") по дате добавления
              .radio__block
                input#sort-2(type="radio" name="sort")
                label(for="sort-2") по рейтингу
              .radio__block
                input#sort-3(type="radio" name="sort")
                label(for="sort-3") по кол-ву отзывов
            p.desctop Отображено {{limit}} инициатив из {{initiative.length}}
          .list.pl
            Card(v-for="card in lists" :key="card.id" :card="card")
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        .col-sm-10.map(v-show="map")
          Map(:coords="coords" :placemarks="items" :zoom="zoom" @set-coords="coords = $event")
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import AppAside from '~/components/ui/AppAside'
import Intro from '~/components/catalog/intro'
import Card from '~/components/catalog/card'
import Map from '~/components/catalog/map'
export default {
  components: {
    AppAside,
    Intro,
    Card,
    Map
  },
  data() {
    return {
      showMap: false,
      zoom: 9,
      items: [
        [55.636448, 37.675648],
        [55.636448, 37.675648],
        [55.636448, 37.675648],
        [52.636448, 37.675648],
        [51.636448, 37.675648]
      ],
      coords: [55.636448, 37.675648],
      lists: [],
      limit: 0,
      i: 0,
      show: false
    }
  },
  computed: {
    initiative() {
      return this.$store.getters['initiative/getInitiative']
    },
    list() {
      return this.$store.getters['displayCatalog/getList']
    },
    map() {
      return this.$store.getters['displayCatalog/getMap']
    }
  },
  mounted() {
    // console.log(this.$route.query.id)
    // ymaps.ready(this.createMap)
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = []
        for (let i = 0; i < 10; i++) {
          temp.push(this.initiative[this.limit++])
        }
        this.lists = this.lists.concat(temp)
        if (this.initiative.length !== this.limit) {
          $state.loaded()
        } else {
          $state.loaded()
          $state.complete()
        }
      }, 1000)
    }
  }
  // methods: {
  //   createMap() {
  //     const map = new ymaps.Map('map', {
  //       center: [55.76, 37.64],
  //       zoom: 7
  //     })
  //     const myGeoObjects = []
  //     myGeoObjects[0] = new ymaps.GeoObject({
  //       geometry: { type: 'Point', coordinates: [56.034, 36.992] },
  //       properties: {
  //         clusterCaption: 'Геообъект №1',
  //         balloonContentBody: 'Содержимое балуна геообъекта №1.'
  //       }
  //     })
  //     myGeoObjects[1] = new ymaps.GeoObject({
  //       geometry: { type: 'Point', coordinates: [56.021, 36.983] },
  //       properties: {
  //         clusterCaption: 'Геообъект №2',
  //         balloonContentBody: 'Содержимое балуна геообъекта №2.'
  //       }
  //     })
  //     const myClusterer = new ymaps.Clusterer({
  //       iconColor: '#000000',
  //       clusterDisableClickZoom: false
  //     })
  //     myClusterer.add(myGeoObjects)
  //     map.geoObjects.add(myClusterer)
  //   }
  // }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.radio
  @media (min-width: 768px)
    display: flex !important
.list_nom
  padding-left: 0
  padding-right: 0
.catalog_mon
  padding-left: 0
  padding-right: 0
.pl
  padding-left: 100px
  @media (max-width: 767px)
    padding-left: 0
.sort
  display: flex
  align-items: center
  margin-bottom: 30px
  position: sticky
  top: 0px
  background: $very-light-pink-two
  padding-top: 20px
  padding-bottom: 20px
  @media (max-width: 767px)
    position: static
    flex-direction: column
  h3
    font-family: $mont
    font-weight: 600
    font-size: 18px
    line-height: 1.44
    margin-right: 30px
    @media (max-width: 767px)
      font-size: 16px
      margin: 5px 0
      padding: 10px 50px 10px 20px
      background: #fff
      position: relative
    &:after
      @media (max-width: 767px)
        content: ''
        position: absolute
        right: 20px
        bottom: 11px
        border: 6px solid transparent
        border-top: 6px solid #1F4FA7
    &.clear:after
      @media (max-width: 767px)
        bottom: 17px
        border: 6px solid transparent
        border-top: none
        border-bottom: 6px solid #1F4FA7
  .radio
    display: flex
    @media (max-width: 767px)
      flex-direction: column
    &__block
      @media (max-width: 767px)
        text-align: center
        margin: 10px 0
      input
        display: none
      label
        font-family: $mont
        font-weight: 500
        font-size: 18px
        line-height: 1.44
        margin-right: 10px
        color: $blue
        padding: 10px
        cursor: pointer
        transition: all 0.3s
        @media (max-width: 767px)
          margin-right: 0
          font-size: 16px
          padding: 10px
      input:checked + label
        background: $white
        border-radius: 4px
        color: $black
        box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
        @media (max-width: 767px)
          text-align: center
  ul
    display: flex
    li
      font-family: $mont
      font-weight: 500
      font-size: 18px
      line-height: 1.44
      margin-right: 10px
      color: $blue
      padding: 10px
      cursor: pointer
      &.active
        background: $white
        border-radius: 4px
        color: $black
  p
    flex: 1
    font-family: $mont
    font-size: 18px
    font-weight: 500
    line-height: 1.17
    text-align: right
    color: $greyish-brown
  .all_initiative
    @media (max-width: 767px)
      font-size: 14px
      margin: 0 0 30px 0
</style>
