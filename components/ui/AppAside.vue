<template lang="pug">
  .aside-block
    h2.desctop Голосуйте за&nbsp;инициативы в&nbsp;конкурсе 2020 года:
    a.btn.btn-blue.mobile_flex.show_nomination_link.menu(v-if="!show" @click="show = !show" key="menu") Показать список номинаций
    a.btn.btn-blue.mobile_flex.show_nomination_link.clear(v-else @click="show = !show" key="clear") Скрыть список номинаций
    //- .switch.desctop
      //- ul
        //- li(@click="setList" :class="{active:list}") Список
        //- li(@click="setMap" :class="{active:map}") На карте страны
    .show(v-show="show")
      .list
        ul
          li(v-for="(item, index) in nominations" :key="index" @click="setNominationId(index)")
            a(
              :href='`/catalog/${item.id}`'
              @click.prevent="goTo(item.id)"
              :class="{highlight : item.id == activeCategory}"
            ) {{item.title}}
            span(v-show="item.count > 0")
              | {{ item.count }}
      //- div(v-if="$route.fullPath != '/'")
      //-   .search
      //-     h3 Найдите инициативы<br> в своём регионе:
      //-     .input
      //-       input(type="text" placeholder="Название региона...")
      //-       i.fas.fa-search
      //-   a(href="#" @click="openModal('region')") Выбрать из списка
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState('initiative', ['activeCategory']),

    nominations() {
      return this.$store.getters['nominations/getNominations']
    },
    list() {
      return this.$store.getters['displayCatalog/getList']
    },
    map() {
      return this.$store.getters['displayCatalog/getMap']
    }
  },
  mounted() {
    this.getNominations()
  },
  methods: {
    ...mapMutations('initiative', ['SET_ACTIVE_CATEGORY']),
    ...mapActions('nominations', ['getNominations']),

    goTo(id) {
      this.SET_ACTIVE_CATEGORY(id)
      this.$router.push(`/catalog/${id}`)
    },

    setList() {
      this.$router.push('/catalog')
      this.$store.dispatch('displayCatalog/setList', true)
      this.$store.dispatch('displayCatalog/setMap', false)
    },
    setMap() {
      this.$router.push('/catalog')
      this.$store.dispatch('displayCatalog/setList', false)
      this.$store.dispatch('displayCatalog/setMap', true)
    },
    setNominationId(index) {
      this.$store.dispatch('nominations/setActiveId', index)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.show
  @media (min-width: 768px)
    display: block !important
.aside-block
  width: 320px
  background: #fff
  padding: 25px 20px
  margin-top: 54px
  position: sticky
  top: 10px
  box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
  @media (max-width: 767px)
    width: 100%
    background: none
    padding: 0
    margin-top: 0
    top: 0
  @-moz-document url-prefix()
    position: relative !important
  h2
    color: $black-2
    font-size: 24px
    line-height: 32px
    font-weight: 600
    margin-bottom: 26px
    font-family: $firacond
  .show_nomination_link
    @media (max-width: 767px)
      color: #fff
      text-align: center
      margin: 20px 0 0
      &:hover
        text-decoration: none
  // a
  //   font-size: 16px
  //   font-weight: 500
  //   font-family: $mont
  //   color: $blue
  //   text-decoration: none
  //   &:hover
  //     text-decoration: underline
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
  @media (max-width: 767px)
    margin-top: 20px
  li
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 17px
    font-family: $firacond
    &:last-child
      margin-bottom: 0
    a
      color: $blue
      font-weight: 400
      font-size: 20px
      line-height: 22px
      border-bottom: 1px solid $blue
      text-decoration: none
      // &.highlight
      //   color: $blue
      //   font-weight: 600
      &:hover, &.highlight
        color: $red-2
        border-bottom: 1px solid $red-2
    span
      font-size: 18px
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
