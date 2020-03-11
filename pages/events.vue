<template lang="pug">
  .events
    .container-fluid.container-padding
      .row
        .col-xs-12
          .heading
            h1 События благосферы
          .sort.pl
            h3 Сортировка:
            .radio
              .radio__block
                input#sort-1(type="radio" value="all" name="sort" checked v-model="sort" @change="changeSort")
                label(for="sort-1") Все
              .radio__block
                input#sort-2(type="radio" value="news" name="sort" v-model="sort" @change="changeSort")
                label(for="sort-2") Новости премии
              .radio__block
                input#sort-3(type="radio" value="events" name="sort" v-model="sort" @change="changeSort")
                label(for="sort-3") События конкурсантов
    .container-fluid
      .row
        Card(v-for="event in events" :key="event.id" :event="event" :sort="sort")
        .events__pagination
          Pagination(
            v-if="totalNews"
            :count="totalNews"
            :limit="limit"
            @changePage="changePage"
          )
    NuxtChild
</template>

<script>
import Pagination from '@/components/pagination'
import { mapState, mapMutations, mapActions } from 'vuex'

import Card from '~/components/events/card'

export default {
  components: {
    Card,
    Pagination
  },
  data() {
    return {
      limit: 12,
      sort: 'all'
    }
  },
  computed: {
    ...mapState('events', ['events', 'totalNews'])
  },
  asyncData({ store, route }) {
    store.commit('events/INITIAL_EVENTS')
    store.dispatch('events/getCountEvents')
    return store.dispatch('events/getEvents', {
      page: 1
    })
  },
  methods: {
    ...mapMutations('events', ['INITIAL_EVENTS']),
    ...mapActions('events', ['getEvents', 'getCountEvents']),

    changeSort(e) {
      this.INITIAL_EVENTS()
      const type = e.target.value
      const params = {
        page: 1
      }
      if (type !== 'all') {
        if (type === 'news') {
          params.isEvent = false
        } else {
          params.isEvent = true
        }
      } else {
        this.getCountEvents()
      }
      this.getEvents(params)
    },

    async changePage(e) {
      await this.getEvents({
        page: e
      })
      window.scrollTo(0, 0, { behavior: 'smooth' })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.events
  padding-top: 50px
  position: relative
  &:before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: -1
    height: 1000px
    display: block
    background: url(/img/events/bg.jpg)
    background-size: cover
    background-repeat: no-repeat
  .heading h1
    margin-bottom: 30px
    font-family: $firacond
    font-size: 44px
    line-height: 36px
  &__pagination
    width: 100%
.sort
  display: flex
  align-items: center
  margin-bottom: 30px
  position: sticky
  top: 0px
  padding-top: 20px
  padding-bottom: 20px
  @media (max-width: 767px)
    position: static
    flex-direction: column
  h3
    font-family: $mont
    font-weight: bold
    font-size: 18px
    line-height: 1.44
    margin-right: 30px
    @media (max-width: 767px)
      font-size: 16px
      margin: 5px 0 15px
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
  .radio
    display: flex
    @media (max-width: 767px)
      flex-direction: column
    &__block
      @media (max-width: 767px)
        text-align: center
        margin: 3px 0
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
          display: block
      input:checked + label
        background: $white
        border-radius: 4px
        color: $black
        box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
        @media (max-width: 767px)
          text-align: center
.btn
  margin-left: 50px
  @media (max-width: 767px)
    margin-left: 0
.show_more_con
  @media (max-width: 767px)
    text-align: center
    width: 100%
</style>
