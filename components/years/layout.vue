<template lang="pug">
  .laureate
    .container.container-fluid
      .row
        .col-sm-3.col-xs-12
          .aside
            h3(v-if="singleCity") {{ singleCity.name }} <br> {{ currentYear }}
            ul
              li.active
                a(href="#") Итоги
              li
                a(href="#") Пресс-релиз
              li
                a(href="#") Фотогалерея
              li
                a(href="#") Видео
              li(v-if="currentYear != 2020")
                a(href="#") Лауреаты
              li(v-if="currentYear != 2020")
                a(href="#") Номинанты и участники
        .col-sm-9.col-xs-12
          .block
            .heading
              h1 Лауреаты и участники конкурсов 2013-2020
            div
              .years
                .mobile.mob_link
                  nuxt-link(:to="`/years/${yearsLast.name}`"  :class="{ 'active-red' : +yearsLast.name === +currentYear }").btn.btn-transparent.btn-transparent-red Ход конкурса {{ yearsLast.name }} года
                nuxt-link(v-for="(item, i) in yearsPop" :key="i" :to="`/years/${item.name}`" :class="{ 'nuxt-link-active' : +item.name === +currentYear }").btn.btn-transparent.btn-transparent-blue
                  | {{ item.name }}
                nuxt-link(:to="`/years/${yearsLast.name}`" :class="{ 'active-red' : +yearsLast.name === +currentYear }").btn.btn-transparent.btn-transparent-red.desctop Ход конкурса {{ yearsLast.name }} года
              div
                div
                .cities
                  ul
                    li(v-for="(item, i) in returnCities" :key="i" :class="{ 'active' : +item.id === +currentCity }")
                      nuxt-link(:to="`/years/${currentYear}/${item.id}`") {{ item.name }}
                  hr
                City
</template>

<script>
import City from '@/components/years/city'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    City
  },
  data() {
    return {
      currentYear: null,
      currentCity: null
    }
  },
  computed: {
    ...mapState('laureate', ['years', 'singleCity']),
    yearsPop() {
      const newYears = this.years.slice()
      newYears.pop()
      return newYears
    },
    yearsLast() {
      const newYears = this.years.slice()
      const Last = newYears.pop()
      return Last
    },

    returnCities() {
      if (this.currentYear) {
        return this.years.find((item, i) => {
          return +item.name === +this.currentYear
        }).yearsCities
      }
      return []
    }
  },
  async created() {
    this.INITIAL_CITY()

    if (this.years.length < 1) {
      await this.getYears()
    }
    this.parseRoute()
    this.getCity({ id: this.currentCity })
  },
  methods: {
    ...mapMutations('laureate', ['INITIAL_CITY']),
    ...mapActions('laureate', ['getYears', 'getCity']),

    parseRoute() {
      const { year, city } = this.$route.params
      if (year && year !== undefined) {
        this.currentYear = year
        if (city && city !== undefined) {
          this.currentCity = city
        } else {
          this.currentCity = +this.years.find((item, i) => {
            return +item.name === +year
          }).yearsCities[0].id
        }
      } else {
        this.currentYear = +this.years[0].name
        this.currentCity = +this.years[0].yearsCities[0].id
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
hr
  width: 100vw
  position: relative
  left: -50px
  border-color: rgba($black, 0.1)
  @media (max-width: 767px)
    width: 100%
    left: 0
    margin: 0
.laureate
  .block
    padding-top: 45px
    padding-left: 50px
    background: $white
    width: 105%
    overflow: hidden
    @media (max-width: 767px)
      padding: 30px 15px
      width: 100%
.aside
  padding-top: 45px
  position: sticky
  top: 10px
  @media (max-width: 767px)
    padding: 40px 15px
    display: none
  h3
    font-family: $fira
    font-size: 28px
    font-weight: 600
    font-style: normal
    line-height: 1.21
    color: $black
    margin-bottom: 30px
    br
      @media (max-width: 767px)
        display: none
    @media (max-width: 767px)
      font-size: 22px
      margin-bottom: 10px
  ul
    li
      &.active a
        color: $blue
        font-weight: 600
      a
        font-family: $fira
        font-size: 20px
        font-stretch: condensed
        line-height: 2
        color: $black
        text-decoration: none
.heading
  margin-bottom: 35px
  .mob_ct
    @media (max-width: 767px)
      text-align: center
  h1
    color: $black
.years
  margin-bottom: 38px
  @media (max-width: 767px)
    margin: 0 -3px
    display: inline-flex
    flex-wrap: wrap
  .btn
    text-transform: uppercase
    font-weight: 700
    margin-right: 10px
    @media (max-width: 767px)
      margin: 4px 3px
      height: 34px
      padding: 0 11px 0 12px
  .mob_link
    @media (max-width: 767px)
      width: 100%
      margin: 0 0 10px
      text-align: center
    a
      min-width: 264px
.active-red
  border-color: $red
  background: $red
  color: $white
.cities
  position: relative
  padding-bottom: 35px
  margin-bottom: 50px
  @media (max-width: 767px)
    margin-bottom: 0
  ul
    display: flex
    width: 900px
    justify-content: space-between
    @media (max-width: 767px)
      flex-wrap: wrap
      flex-direction: column
      margin: 30px 0
      width: 100%
    li
      font-family: $fira
      font-size: 26px
      font-weight: 600
      line-height: 1
      color: $blue
      position: relative
      cursor: pointer
      a
        text-decoration: none
      @media (max-width: 767px)
        font-size: 18px
        margin: 7px 0
      &:before
        content: ''
        width: 100%
        height: 5px
        background: $red
        position: absolute
        bottom: -25px
        opacity: 0
        @media (max-width: 767px)
          display: none
      &.active:before
        opacity: 1
  hr
    width: 100vw
    position: absolute
    left: -50px
    bottom: 0
    @media (max-width: 767px)
      display: none
</style>
