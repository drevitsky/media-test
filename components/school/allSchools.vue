<template lang="pug">
    .container-fluid
      .row
        .col-sm-3.aside_wrap
          // SchoolAside
        .col-sm-9
          .start#start
          p.arrow-theme Выберите интересующую вас тему
          .sort
            p.mobile.all_lessons Отображено {{ limit }} уроков из {{ schools.length }}
            // h3.menu Сортировка:
            h3.menu(v-if="!show" @click="show = !show" key="menu") Сортировка:
            h3.clear(v-else @click="show = !show" key="clear") Сортировка:
            .radio(v-show="show")
              .radio__block
                input#sort-1(type="radio" name="sort" value="date" checked v-model="sort")
                label(for="sort-1") по дате добавления
              // .radio__block
              //   input#sort-2(type="radio" name="sort" value="id" v-model="sort")
              //   label(for="sort-2") по ID
            //   .radio__block
            //     input#sort-3(type="radio" name="sort" value="reviews" v-model="sort")
            //     label(for="sort-3") по кол-ву отзывов
            p.desctop Отображено с {{ limit * page - limit + 1 }} по {{ limit * page }} уроков из {{ schools.length }}
          .list
            Card(v-for="(card, c) in returnSchoolsList" :key="c" :card="card")
            Pagination(
            :count="schools.length"
            :limit="limit"
            @changePage="changePage"
          )
</template>
<script>
import Pagination from '@/components/pagination'
import SchoolAside from '~/components/school/SchoolAside'
import Card from '~/components/school/card'
export default {
  components: {
    SchoolAside,
    Card,
    Pagination
  },
  data() {
    return {
      limit: 12,
      page: 1,
      show: false,
      sort: 'date',
      schools: [],
      schoolsPage: []
    }
  },
  computed: {
    returnSchoolsList() {
      const array = this.schools
      const list = []
      const start = this.page * this.limit - this.limit
      const end = start + this.limit

      array.forEach((item, i) => {
        if (i >= start && i < end) {
          list.push(item)
        }
      })

      // сортировка (по дате, id)
      switch (this.sort) {
        case 'date': {
          const arr = list.slice().sort(this.sortByDate)
          return arr
        }
        case 'id': {
          const arr = list.slice().sort(this.sortById)
          return arr
        }
        default:
          return list
      }

      // return list
    }
  },
  mounted() {
    this.getSchools()
  },
  methods: {
    async getSchools() {
      let arr = []
      for (let index = 1; index < 6; index++) {
        const response = await this.$axios.get(`/schools?page=${index}`)
        arr = arr.concat(response.data)
      }
      this.schools = arr
    },
    changePage(e) {
      const block = document.querySelector('#start')
      const coordY = this.getCoords(block)
      window.scrollTo(0, coordY.top, { behavior: 'smooth' })
      this.page = e
    },
    getCoords(elem) {
      const box = elem.getBoundingClientRect()
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      }
    },
    sortByDate(e1, e2) {
      return e1.schoolArticles[0].createdAt > e2.schoolArticles[0].createdAt
        ? 1
        : -1
    },
    sortById(e1, e2) {
      return e1.id > e2.id ? 1 : -1
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~assets/ui/vars'
.radio
  @media (min-width: 768px)
    display: flex !important
.arrow-theme
  font-size: 18px
  font-weight: 500
  line-height: 1.56
  color: $greyish-brown
  font-family: $mont
  position: relative
  padding-left: 149px
  margin-bottom: 42px
  margin-top: 72px
  &:before
    content: ''
    background-image: url(/img/home/intro/arrow-line.svg)
    width: 123px
    height: 42px
    display: block
    background-size: cover
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 0
  @media (max-width: 767px)
    display: none
.pl
  padding-left: 100px
  @media (max-width: 767px)
    padding-left: 0
.sort
  display: flex
  align-items: center
  margin-bottom: 30px
  position: sticky
  z-index: 100
  top: 0px
  background: $very-light-pink-two
  padding-top: 20px
  padding-bottom: 20px
  justify-content: space-between
  &_wrap
    display: flex
    @media (max-width: 767px)
      flex-direction: column
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
        // background: $white
        border-radius: 4px
        color: $black
        // box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
        @media (max-width: 767px)
          text-align: center
  p
    flex: 1
    font-family: $mont
    font-size: 18px
    font-weight: 500
    line-height: 1.17
    text-align: right
    color: $greyish-brown
  .all_lessons
    @media (max-width: 767px)
      font-size: 14px
      margin: 0 0 30px 0
.btn
  margin-left: 50px
  @media (max-width: 767px)
    margin-left: 0
.show_more_con
  @media (max-width: 767px)
    text-align: center
    width: 100%
.aside_wrap
  @media (max-width: 767px)
    margin: 0 auto
// .all_lessons
//   margin-bottom: 22px
</style>
