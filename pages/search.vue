<template lang="pug">
  .search
    .close(@click="$router.back()")
      i.icon.icon-close
      | Закрыть
    input(type="text" v-model="search" placeholder='введите поисковый запрос')
    .list
      ul
        li(v-for="(item, i) in searchResult" :key="i")
          nuxt-link(:to="`/initiative/${item.id}`") {{ item.title }}
    div(v-if="!search")
      .help <b>Поиск осуществляется по названию и описанию инициатив на сайте.</b><br> Если вы ищете инициативы в своём регионе - <a href="#">веберите регион из списка</a>.<br> Найти организаторов инициатив можно в разделе <nuxt-link to="/register">Реестр</nuxt-link>.
      .sitemap
        h2 Карта сайта
        ul
          li
            nuxt-link(to="/years/2020") Конкурс 2020 года
          li
            nuxt-link(to="/years") Лауреаты 2013-2019
          li
            nuxt-link(to="/events") События
          li
            a(href="#school" @click="openModal('school')") Школа
          li
            nuxt-link(to="/register") Реестр
          li
            a(href="#") Положение о Федеральной премии
          //- li
          //-   a(href="#") Положение о Региональных премиях
          li
            a(href="#expert" @click="openModal('expert')") Экспертный совет
          li
            a(href="#jury" @click="openModal('jury')") Большое жюри
          li
            a(href="#contact" @click="openModal('contact')") Контакты организационного комитета
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState('initiative', ['searchResult'])
  },
  watch: {
    search(data) {
      this.RESET_SEARCH()
      if (data) {
        this.debouncedGetAnswer(data)
      }
    }
  },
  mounted() {
    this.RESET_SEARCH()
  },
  created() {
    this.debouncedGetAnswer = Vue.lodash.debounce(this.searchInitiatives, 500)
  },
  methods: {
    ...mapActions('initiative', ['searchInitiatives']),
    ...mapMutations('initiative', ['RESET_SEARCH'])
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.search
  background: $white
  width: 100%
  height: 100%
  z-index: 900
  position: fixed
  top: 0
  overflow: scroll
  display: flex
  flex-direction: column
  align-items: center
  padding-top: 50px
  .close
    cursor: pointer
    display: flex
    align-items: center
    font-size: 16px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    line-height: 1.63
    letter-spacing: normal
    text-align: left
    color: $blue
    margin-bottom: 65px
    i
      font-size: 25px
      margin-right: 13px
  input
    width: 915px
    padding: 5px
    text-align: center
    border-bottom: 1px solid grey
    font-size: 44px
    font-family: $fira
    font-weight: normal
    font-style: normal
    font-stretch: condensed
    line-height: 0.68
    letter-spacing: normal
    margin-bottom: 75px
    @media (max-width: 767px)
      width: 90%
      margin: 0 5% 50px
      font-size: 20px
    &::placeholder
      color: #999999
  .help
    font-size: 18px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    line-height: 1.56
    letter-spacing: normal
    text-align: center
    color: $black
    margin-bottom: 75px
    @media (max-width: 767px)
      font-size: 12px
      margin: 0 15px 75px
  .sitemap
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 100px
    @media (max-width: 767px)
      margin: 0 15px 75px
    h2
      font-size: 44px
      font-family: $fira
      font-weight: 600
      font-style: normal
      font-stretch: condensed
      line-height: 0.68
      letter-spacing: normal
      text-align: left
      color: $black
      margin-bottom: 30px
      @media (max-width: 767px)
        font-size: 22px
    ul
      a
        font-size: 18px
        font-weight: 500
        font-style: normal
        font-stretch: normal
        line-height: 2.11
        letter-spacing: normal
        text-align: center
        color: $blue
        text-align: center
        display: block
        @media (max-width: 767px)
          font-size: 14px
  .list
    @media (max-width: 767px)
      padding: 0 15px
  .list ul
    li
      a
        font-size: 18px
        font-weight: 500
        font-style: normal
        font-stretch: normal
        line-height: 2.11
        letter-spacing: normal
        text-align: center
        color: $blue
        display: block
        @media (max-width: 767px)
          font-size: 14px
</style>
