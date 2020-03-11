<template lang="pug">
  .catalog
    .container-fluid
      .row
        .col-sm-2.col-xs-12.list_nom
          AppAside
        infinite-loading(v-if="!initiatives")
        .col-sm-10.col-xs-12.catalog_mon(v-else)
          Intro(:id="id")
          .sort.pl
            p.mobile.all_initiative Всего {{initiatives.length}} инициатив
            h3.menu(v-if="!show" @click="show = !show" key="menu") Сортировка:
            h3.clear(v-else @click="show = !show" key="clear") Сортировка:
            .radio(v-show="show")
              .radio__block
                input#sort-1(type="radio" name="sort" value="date" checked v-model="sort")
                label(for="sort-1") по дате добавления
              .radio__block
                input#sort-2(type="radio" name="sort" value="rating" v-model="sort")
                label(for="sort-2") по рейтингу
              .radio__block
                input#sort-3(type="radio" name="sort" value="reviews" v-model="sort")
                label(for="sort-3") по кол-ву отзывов
            p.desctop Отображено с {{ limit * page - limit + 1 }} по {{ limit * page }} инициатив из {{ initiatives.length }}
          .list.pl
            Card(v-for="(card, c) in returnInitiativeList" :key="c" :card="card")
            Pagination(
              :count="initiatives.length"
              :limit="limit"
              @changePage="changePage"
            )
        //- .col-sm-10.map(v-else-if="map")
        //-   Map(:coords="coords" :placemarks="items" :zoom="zoom" @set-coords="coords = $event")
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Pagination from '@/components/pagination'
import { mapState } from 'vuex'

import AppAside from '~/components/ui/AppAside'
import Intro from '~/components/catalog/intro'
import Card from '~/components/catalog/card'
import Map from '~/components/catalog/map'

export default {
  components: {
    AppAside,
    Intro,
    Card,
    Map,
    Pagination
  },
  data() {
    return {
      id: this.$route.params.id,
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
      // limit: 0,
      i: 0,
      show: false,
      page: 1,
      limit: 12,
      sort: 'date'
    }
  },
  computed: {
    ...mapState('initiative', ['initiatives']),

    // list() {
    //   return this.$store.getters['displayCatalog/getList']
    // },
    // map() {
    //   return this.$store.getters['displayCatalog/getMap']
    // },

    returnInitiativeList() {
      let array = this.initiatives
      // фильтруем - только включенный инициативы
      array = array.filter((item, i) => {
        return item.isActive
      })

      const list = []
      const start = this.page * this.limit - this.limit
      const end = start + this.limit

      array.forEach((item, i) => {
        if (i >= start && i < end) {
          list.push(item)
        }
      })

      // сортировка (по дате, рейтингу, кол-во отзывов)
      switch (this.sort) {
        case 'date':
          return list.slice().sort(this.sortByDate)
        case 'rating':
          return list.slice().sort(this.sortByRating)
        case 'reviews':
          return list.slice().sort(this.sortByReviews)
        default:
          return list
      }

      // return list
    }
  },
  asyncData({ store, route }) {
    store.commit('initiative/SET_INITIAL_INITIATIVES')
    return store.dispatch('initiative/getInitiatives', {
      id: route.params.id
    })
  },
  methods: {
    changePage(e) {
      window.scrollTo(0, 0, { behavior: 'smooth' })
      this.page = e
    },

    sortByDate(e1, e2) {
      return e1.updatedAt < e2.updatedAt ? 1 : -1
    },

    sortByRating(e1, e2) {
      return +e1.rating < +e2.rating ? 1 : -1
    },

    sortByReviews(e1, e2) {
      return +e1.views > +e2.views ? 1 : -1
    }
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
  }
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
  margin-left: 40px
  @media (max-width: 767px)
    margin-left: 0
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
