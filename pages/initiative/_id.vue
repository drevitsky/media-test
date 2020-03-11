<template lang="pug">
  .initiative(v-if="initiative")
    .container-fluid
      .row
        .col-sm-2.col-xs-12
          Aside
        .col-sm-8.col-xs-12
          article.pl.pt.pr
            InitiativeHeader(:initiative="initiative")
            main
              client-only
                Slider(:images="initiative.images" v-if="initiative.images.length > 0")
              .block
                h2 Цели и задачи
                .block__content.big-size
                  p(v-html="initiative.target")
                  p(v-html="initiative.tasks")
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              button.btn.btn-red.btn_scroll.mobile(@click="goToVote()") Проголосовать
              .block(v-if="initiative.videos.length > 0" :class="{ 'video-overflow' : !showVideos }")
                h2 Видео
                .block__content
                  iframe(
                    v-for="(video, v) in initiative.videos" :key="v"
                    class="block__video"
                    width="100%"
                    height="500"
                    :src="`https://www.youtube.com/embed/${video.code}`"
                    frameborder="0"
                    allowfullscreen)
                a.btn.btn-blue.d-inline-flex(@click.prevent="openBlock($event, 'video')" v-if="initiative.videos.length > 1")
                  i.icon.icon-arrow(:class="{ 'active' : showVideos }")
                  span Все видео
              .block(v-if="initiative.url")
                h2 Мы в интернете
                div(v-html="initiative.url" class="block__links block__parags")
              .block(v-if="initiative.groups")
                h2 Целевая группа
                .block__content.big-size(v-html="initiative.groups" class="block__parags")
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              button.btn.btn-red.btn_scroll.mobile(@click="goToVote()") Проголосовать
              hr.after_btn
              .block(v-if="initiative.statistic")
                h2 Статистика
                .block__content(v-html="initiative.statistic" class="block__parags")
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              .block(v-if="initiative.smi")
                h2 О нас в СМИ
                .block__content(v-html="initiative.smi" class="block__parags")
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              button.btn.btn-red.btn_scroll.mobile(@click="goToVote()") Проголосовать
              hr.after_btn
              Review(:comments="initiative.comments" :initiativeId="initiative.id")
              //- .block
              //-   h2 Цели и задачи
              //-   .block__content.big-size
              //-     p(v-html="initiative.target")
              //-     p(v-html="initiative.tasks")
              //-   a.btn.btn-blue(@click="toggleMore($event)")
              //-     i.icon.icon-arrow
              //-     span Развернуть весь текст
              .block.organizator
                h2 Организатор проекта
                h3 {{ initiative.orgName }}
                .flex.middle-xs
                  .block__image
                    img(v-if="initiative.leaderPhoto" :src="returnImageUrl(initiative.leaderPhoto)", alt=" ")
                  h4 {{ initiative.orgUser }}
                .block__content(:class="{ 'hide' : !showContacts }")
                  p {{ initiative.orgAddress }}
                  p {{ initiative.orgPhone }}
                  p {{ initiative.orgEmail }}
                a.btn.btn-blue.d-inline-flex(@click.prevent="showContacts = !showContacts")
                  i.icon.icon-arrow(:class="{ 'active' : showContacts }")
                  span {{ showContacts ? 'Скрыть' : 'Показать контактные данные' }}
              //- .block
              //-   h2 Обращение организатора
              //-   .block__content(v-html="" class="block__parags")
              //-   a.btn.btn-blue(@click="toggleMore($event)")
              //-     i.icon.icon-arrow
              //-     span Развернуть весь текст
              .block(v-if="initiative.banking")
                h2 Банковские реквизиты для финансовой поддержки
                .block__content(v-html="initiative.banking" class="block__parags")
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
        .col-sm-2
          Voting(:initiativeTitle="initiative.title" :initiativeId="initiative.id" :initiativeVotes="initiative.votings && initiative.votings.length" :initiativeCategory="initiative.category && initiative.category.name")
        .col-sm-7.col-sm-offset-2.pl.desctop
          .block.without-line
            h2 Поддержите голосом и отзывом другие инициативы в номинации «
              a(href="#") Наш общий дом − Россия
              | »
            Card(v-for="(card, i) in randomInitiatives" :key="i" :card="card")
</template>

<script>
import { functions } from '@/modules'
import { mapState, mapActions } from 'vuex'
import u from 'umbrellajs'

import Aside from '~/components/ui/AppAside'
import Voting from '~/components/initiative/voting'
import InitiativeHeader from '~/components/initiative/header'
import Slider from '~/components/initiative/slider'
import Review from '~/components/initiative/review'
import Card from '~/components/catalog/card'

export default {
  components: {
    Aside,
    Voting,
    InitiativeHeader,
    Slider,
    Review,
    Card
  },
  data() {
    return {
      showVideos: false,
      showContacts: false,
      randomInitiatives: []
    }
  },
  computed: {
    ...mapState('initiative', ['initiative'])
  },
  asyncData({ store, params, $axios, $route }) {
    return store.dispatch('initiative/getInitiative', {
      id: params.id
    })
  },
  mounted() {
    this.getRandomInitiatives()

    const blocks = document.querySelectorAll('.block')
    blocks.forEach((el) => {
      let sumHeight = 0
      el.querySelectorAll('p').forEach((el) => {
        sumHeight += el.offsetHeight
      })
      if (sumHeight > 200) {
        u(el).addClass('overflow')
        u(el)
          .find('.btn')
          .addClass('d-inline-flex')
      }
    })
  },
  methods: {
    ...mapActions('initiative', ['getInitiatives']),

    async getRandomInitiatives() {
      const response = await this.getInitiatives({
        id: this.initiative.category.id,
        return: true
      })

      for (let i = 0; i < 4; i++) {
        this.randomInitiatives.push(
          response[Math.floor(Math.random() * response.length)]
        )
      }
    },

    returnImageUrl(src) {
      return functions.returnUrlPrefix() + '' + src
    },

    goToVote() {
      document.getElementById('voting').scrollIntoView({
        behavior: 'smooth'
      })
    },

    openBlock(e, type) {
      this.showVideos = !this.showVideos
    },

    toggleMore(event) {
      if (u(event.currentTarget).text() === 'Развернуть весь текст') {
        u(event.currentTarget)
          .find('i')
          .addClass('active')
        u(event.currentTarget)
          .find('span')
          .text('Свернуть')
        u(event.currentTarget)
          .siblings('.block__content')
          .addClass('all')
        return
      }
      u(event.currentTarget)
        .find('i')
        .removeClass('active')
      u(event.currentTarget)
        .find('span')
        .text('Развернуть весь текст')
      u(event.currentTarget)
        .siblings('.block__content')
        .removeClass('all')
    }
  }
}
</script>

<style lang="sass">
@import '~assets/ui/vars'
.block__parags
  p
    font-size: 16px
    font-weight: 500
    line-height: 1.63
    text-align: left
    color: $black
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 14px
.block__links
  a
    font-weight: 500
</style>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.initiative
  .pl
    padding-left: 100px
    @media (max-width: 767px)
      padding-left: 0
  .pt
    padding-top: 50px
    @media (max-width: 767px)
      padding-top: 0
      margin: 30px 0 0
  .pr
    padding-right: 100px
    @media (max-width: 767px)
      padding-right: 0
.btn_scroll
  width: 100%
  margin: 0 0 30px
  @media (max-width: 767px)
    width: 280px
    margin: 0 auto 30px
.after_btn
  margin: 0 0 25px
  @media (min-width: 1024px)
    display: none
.block
  padding-bottom: 40px
  margin-bottom: 50px
  border-bottom: 1px solid grey
  @media (max-width: 767px)
    padding-bottom: 30px
    margin-bottom: 30px
    display: flex
    flex-direction: column
  &__content
    &.hide
      display: none
  &.without-line
    border: none
  &__image
    width: 120px
    height: 120px
    overflow: hidden
    border-radius: 50%
    margin-right: 50px
    margin-bottom: 40px
    background: url('/img/guest.jpg')no-repeat 50% / cover
    @media (max-width: 767px)
      min-width: 70px
      width: 70px
      height: 70px
      margin-right: 15px
      margin-bottom: 0
    img
      width: 100%
      height: 100%
      object-fit: cover
  h4
    margin-bottom: 40px
    font-size: 20px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    line-height: 1.3
    letter-spacing: normal
    text-align: left
    color: $black
    @media (max-width: 767px)
      font-size: 16px
      align-self: center
      margin-bottom: 0
  h2
    font-size: 28px
    font-family: $fira
    font-weight: 600
    line-height: 1.43
    text-align: left
    color: $black
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 22px
    a
      color: $blue
  h3
    margin-bottom: 35px
  p
    font-size: 16px
    font-weight: 500
    line-height: 1.63
    text-align: left
    color: $black
    margin-bottom: 30px
    @media (max-width: 767px)
      font-size: 14px
  .link
    font-weight: 500
  .btn
    display: none
    &.d-inline-flex
      display: inline-flex
      @media (max-width: 767px)
        align-self: center
      i
        transition: all 0.3s
        &.active
          transform: rotate(-180deg)
          top: -1px
  &.video-overflow
    .block__content
      max-height: 500px
      overflow: hidden
      margin-bottom: 20px
      &.all
        max-height: none
  &.overflow
    .block__content
      max-height: 200px
      overflow: hidden
      margin-bottom: 20px
      position: relative
      transition: all 1s
      @media (max-width: 767px)
        max-height: 150px
      &:before
        content: ''
        background-color: rgba(242,242,242,1)
        background: linear-gradient(to bottom, rgba(242,242,242,0.5) 0%, rgba(242,242,242,1) 100%);
        width: 100%
        height: 70px
        opacity: 1
        position: absolute
        bottom: 0
        left: 0
        transition: all 1s
      &.all
        max-height: 1000px
        &:before
          opacity: 0
.organizator
  .btn
    @media (max-width: 767px)
      font-size: 12px
      margin-top: 20px
</style>
