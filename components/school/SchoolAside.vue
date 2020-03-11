<template lang="pug">
  .aside
    h2.desctop Категории уроков
    a.btn.btn-blue.mobile_flex.show_nomination_link.menu(v-if="!show" @click="show = !show" key="menu") Показать список категорий
    a.btn.btn-blue.mobile_flex.show_nomination_link.clear(v-else @click="show = !show" key="clear") Скрыть список категорий
    //- .switch.desctop
      //- ul
        //- li(@click="setList" :class="{active:list}") Список
        //- li(@click="setMap" :class="{active:map}") На карте страны
    .show(v-show="show")
      .list
        ul
          li(v-for="(item, index) in list" :key="index" @click="")
            a(
              href='#'
              :class="{highlight : item.id == activeCategory}"
            ) {{item.title}}
            span(v-show="item.count > 0")
              | {{ item.count }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      show: false,
      list: [
        {
          id: 0,
          title: 'Все',
          count: 11,
          desc: ''
        },
        {
          id: 1,
          title: 'Помощь детям',
          count: 11,
          desc: ''
        },
        {
          id: 2,
          title: 'Благоустройство',
          count: 21,
          desc: ''
        },
        {
          id: 3,
          title: 'Спортивные мероприятия',
          count: 15,
          desc: ''
        },
        {
          id: 4,
          title: 'Организация фестивалей',
          count: 2,
          desc: ''
        },
        {
          id: 5,
          title: 'Образовательные курсы',
          count: 5,
          desc: ''
        }
      ]
    }
  },
  computed: {
    ...mapState('initiative', ['activeCategory'])
    // lessonsCategory() {
    //   return this.$store.getters['lessonsCategory/getLessonsCategory']
    // },
    // list() {
    //   return this.$store.getters['displayCatalog/getList']
    // },
    // map() {
    //   return this.$store.getters['displayCatalog/getMap']
    // }
  },
  mounted() {
    // this.getLessonsCategory()
  },
  methods: {
    // ...mapMutations('initiative', ['SET_ACTIVE_CATEGORY']),
    // ...mapActions('nominations', ['getLessonsCategory']),
    // goTo(id) {
    //   this.SET_ACTIVE_CATEGORY(id)
    //   this.$router.push(`/catalog/${id}`)
    // },
    // setList() {
    //   this.$router.push('/catalog')
    //   this.$store.dispatch('displayCatalog/setList', true)
    //   this.$store.dispatch('displayCatalog/setMap', false)
    // },
    // setMap() {
    //   this.$router.push('/catalog')
    //   this.$store.dispatch('displayCatalog/setList', false)
    //   this.$store.dispatch('displayCatalog/setMap', true)
    // },
    // setNominationId(index) {
    //   this.$store.dispatch('nominations/setActiveId', index)
    // }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.show
  @media (min-width: 768px)
    display: block !important
.aside
  padding-top: 34px
  width: 270px
  position: sticky
  top: 10px
  @media (max-width: 767px)
    width: 100%
    margin: 0 auto
  @-moz-document url-prefix()
    position: relative !important
  h2
    font-size: 28px
    font-weight: 600
    margin-bottom: 15px
    font-family: $fira
  .show_nomination_link
    @media (max-width: 767px)
      color: #fff
      text-align: center
      margin: 0 0 25px
      min-width: 285px
      &:hover
        text-decoration: none
  a
    font-size: 16px
    font-weight: 500
    font-family: $mont
    color: $blue
    text-decoration: none
    &:hover
      text-decoration: underline
.switch
  margin-bottom: 35px
  ul
    border-radius: 4px
    border: solid 1px $very-light-pink-three
    display: flex
    height: 40px
    li
      font-size: 16px
      font-weight: 500
      width: 100px
      display: flex
      align-items: center
      justify-content: center
      font-family: $mont
      color: $blue
      cursor: pointer
      &:last-child
        flex: 1
      &.active
        background: $very-light-pink
        color: $black
.list
  margin-bottom: 20px
  li
    display: flex
    justify-content: space-between
    align-items: center
    line-height: 2.23
    a
      color: $black
      text-decoration: none
      font-weight: 400
      font-size: 18px
      font-family: $fira
      &.highlight
        color: $blue
        font-weight: 600
      &:hover
        text-decoration: none
        color: $blue
        font-weight: 600
    span
      font-size: 16px
      color: $grey
.search
  h3
    font-size: 16px
    font-weight: 700
    line-height: 1.63
    text-align: left
    color: $black
    font-family: $mont
    margin-bottom: 15px
  .input
    position: relative
    margin-bottom: 20px
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
      &::placeholder
        color: $greyish-brown-two
    i
      position: absolute
      top: 50%
      transform: translateY(-50%)
      right: 16px
</style>
