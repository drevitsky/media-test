<template lang="pug">
  .review
    .container-fluid.container-padding
      .row
        .col-xs-12
          .heading
            h2 Новые отзывы к инициативам
          div(v-if="lastComments")
            article(v-for="(item, i) in returnComments" :key="i")
              header
                .header_bg(style="background-image: url(/img/guest.jpg)")
                  img(:src="item.photo" alt=" ")
              main
                div.name_date
                  h3 {{ item.username.trim() ? item.username : 'Без имени' }}
                  span.flex
                    | − {{ returnDate(item.createdAt) }}
                p {{ item.comment }}
                nuxt-link(:to="`/initiative/${item.initiative.id}`") {{ item.initiative.title }}
</template>

<script>
import dayjs from 'dayjs'
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('initiative', ['lastComments']),

    returnComments() {
      const comments = this.lastComments
      const list = []

      comments.forEach((item, i) => {
        if (item.isActive === true && i < 4) {
          list.push(item)
        }
      })

      return list
    }
  },
  mounted() {
    this.getLastComments()
  },
  methods: {
    ...mapActions('initiative', ['getLastComments']),

    returnDate(d) {
      const date = dayjs(d)
      return date.format('D MMMM YYYY')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.review
  padding: 28px 0 50px
  @media (max-width: 767px)
    padding: 28px 0
  h2
    margin-bottom: 52px
    text-align: center
  article:last-child
    @media (max-width: 767px)
      border-bottom: none
  article
    display: flex
    align-items: center
    padding: 25px 0
    @media (max-width: 767px)
      display: block
      border-bottom: 1px solid #CCCCCC
    header
      flex: 0 0 auto
      width: 100px
      height: 100px
      border-radius: 50%
      overflow: hidden
      margin-right: 28px
      @media (max-width: 767px)
        margin-right: 15px
        float: left
        width: 70px
        height: 70px
      img
        width: 100%
        height: 100%
      .header_bg
        width: 100%
        height: 100%
        background-position: -11px -4px
        background-size: cover
        background-repeat: no-repeat
    main
      font-size: 16px
      font-family: $mont
      .name_date
        display: flex
        @media (max-width: 767px)
          flex-direction: column
          padding: 10px 0 12px
          margin: 0
        h3
          font-weight: bold
          font-size: inherit
          @media (max-width: 767px)
            margin: 0 10px 0 0
            line-height: 1.8
        > span
          font-weight: 500
          color: $greyish-brown
          @media (max-width: 767px)
            line-height: 1.8
      p
        line-height: 1.63
        font-weight: 500
        margin-bottom: 5px
        @media (max-width: 767px)
          margin: 0 0 14px
      a
        color: $blue
        font-weight: bold
        @media (max-width: 767px)
          line-height: 1.8
</style>
