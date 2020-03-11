<template lang="pug">
  .register#reestr
    .container-fluid.container-padding
      .row
        .col-xs-12
          .heading
            h1 Реестр организаторов инициатив
          .sort
            .row.middle-xs
              .col-sm-3.col-xs-12
                .input
                  input(type="text" placeholder="Поиск по названию организации" v-model.trim="search")
                  i.fas.fa-search
              .col-sm-5.col-xs-12
                .region
                  .selected {{ region }}
                  span(v-show="region") /
                  a.select(href="" @click.prevent="openModal('region')") Выбрать регион
              .col-sm-4.col-xs-12.end-sm.center-xs.flex
                .view Отображено с {{ limit * page - limit + 1 }} по {{ limit * page }} организаторов из {{ returnReestrList.length }}
          .block(v-for="(item, i) in returnReestrList.list" :key="i")
            .left
              h2 {{ item.orgName }}
              p.region_p {{ item.name }} {{ item.city ? `, ${item.city}` : '' }}
              a(href="#contacts_info" @click="setActiveItem(item), openModal('contacts_info')") Контактная информация
            hr
            .right
              ul
                li
                  nuxt-link(:to="`/initiative/${item.id}`") {{ item.title }}
                  p В номинации «{{ item.category && item.category.name }}»
          Pagination(
            :count="returnReestrList.length"
            :limit="limit"
            @changePage="changePage"
          )
</template>

<script>
import Pagination from '@/components/pagination'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      list: [],
      page: 1,
      limit: 20,
      search: ''
    }
  },
  computed: {
    ...mapState('reestr', ['name', 'initiatives', 'reestr', 'region']),

    returnReestrList() {
      let reestr
      reestr = this.reestr
      let list = []
      const start = this.page * this.limit - this.limit
      const end = start + this.limit

      if (this.region != null) {
        reestr = reestr.filter((item, i) => {
          const fullCity = item.name + ' ' + item.city
          return fullCity.toLowerCase().indexOf(this.region.toLowerCase()) > -1
        })
      }

      reestr.forEach((item, i) => {
        if (i >= start && i < end) {
          list.push(item)
        }
      })

      if (this.search) {
        list = list.filter((item, i) => {
          return (
            this.indexOf(item.orgName, this.search) ||
            this.indexOf(item.title, this.search)
          )
        })
      }

      return { length: reestr.length, list }
    }
  },
  asyncData({ store, route }) {
    store.commit('reestr/INITIAL_REESTR')
    return store.dispatch('reestr/getReestr', {
      // name: 'Калининградская область'
    })
  },
  methods: {
    ...mapMutations('reestr', ['SET_ACTIVE_ITEM']),

    indexOf(string, include) {
      return string.toLowerCase().indexOf(include.toLowerCase()) > -1
    },

    setActiveItem(item) {
      this.SET_ACTIVE_ITEM(item)
    },

    changePage(e) {
      window.scrollTo(0, 0, { behavior: 'smooth' })
      this.page = e
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.register
  padding-top: 55px
  position: relative
  &:before
    content: ''
    background: url('/img/registry/bg.jpg')
    z-index: -1
    position: absolute
    top: 0
    background-size: cover
    width: 100%
    height: 885px
    display: block
  .heading
    margin-bottom: 30px
.sort
  margin-bottom: 40px
  .input
    position: relative
    margin-right: 10px
    input
      border-radius: 4px
      border: solid 1px $very-light-pink-three
      background-color: $white
      height: 50px
      width: 100%
      padding: 20px
      font-size: 16px
      font-weight: 500
      font-family: $mont
      @media (max-width: 767px)
        font-size: 14px
      &::placeholder
        color: $greyish-brown-two
    i
      position: absolute
      top: 50%
      transform: translateY(-50%)
      right: 16px
      color: $blue
      @media (max-width: 767px)
        background: #fff
        padding: 0 0 0 5px
  .region
    display: flex
    align-items: center
    margin: 20px 0
    @media (max-width: 767px)
      align-items: flex-start
      margin: 30px 0 40px
      flex-direction: column
    .selected, span
      font-size: 18px
      font-weight: bold
      line-height: 1.44
      letter-spacing: normal
      text-align: left
      color: $black
      @media (max-width: 767px)
        font-size: 14px
    span
      padding: 0 7px
      @media (max-width: 767px)
        display: none
    .select
      font-size: 18px
      font-weight: 500
      letter-spacing: normal
      text-align: left
      color: $blue
      cursor: pointer
      @media (max-width: 767px)
        margin: 10px 0 0
        font-size: 14px
  .view
    font-size: 18px
    font-weight: 500
    line-height: 1.17
    color: $greyish-brown
    @media (max-width: 767px)
      font-size: 12px
      text-align: center
.block
  border-radius: 5px
  box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
  background-color: $white
  padding: 40px
  display: flex
  position: relative
  margin-bottom: 20px
  overflow: hidden
  @media (max-width: 767px)
    flex-direction: column
    padding: 25px 15px
  .left
    width: 50%
    @media (max-width: 767px)
      width: 100%
      border-bottom: 1px solid #CCCCCC
      padding: 0 0 35px
  hr
    height: 100%
    width: 1px
    border-left: 1px solid rgba($black, 0.1)
    position: absolute
    top: -2px
    margin: 0
    left: 50%
    @media (max-width: 767px)
      display: none
  .right
    width: 50%
    padding-left: 40px
    @media (max-width: 767px)
      width: 100%
      padding-left: 0
      padding: 35px 0 0
  h2
    font-family: $fira
    font-size: 26px
    font-weight: 600
    line-height: 1.15
    color: $black
    @media (max-width: 767px)
      font-size: 22px
  p
    font-size: 18px
    font-weight: 500
    line-height: 2
    color: $greyish-brown
    @media (max-width: 767px)
      font-size: 14px
  .region_p
    margin: 10px 0
  a
    font-size: 18px
    font-weight: 500
    line-height: 1.78
    color: $blue
    @media (max-width: 767px)
      font-size: 14px
  ul
    li
      margin-bottom: 10px
</style>
