<template lang="pug">
  .review(ref="review")
    h2 Отзывы • {{ comments.length }}
    .review__block
      .review__image.review__image_guest
        img(:src="profile ? profile.image : '/img/guest.jpg'", alt="")
      .review__content
        h3
          b {{ profile ? profile.userName : `Гость` }}
          i  -  {{ date(new Date()) }}
        textarea(v-model.trim="comment" placeholder="Напишите свой отзыв...")
    .w-100
      a.btn.btn-blue.big(@click.prevent="addComment") Оставить отзыв
    .review__list(ref="reviewList" id="reviewList")
      .review__block(v-for="(comment, i) in returnComments" :key="i")
        .review__image(:class="{ 'review__image_guest' : !comment.photo }")
          img(v-if="comment.photo" :src="comment.photo", alt="")
          img(v-else src="/img/guest.jpg")
        .review__content
          h3
            b {{ comment.username }}
            i  -  {{ date(comment.createdAt) }}
          p {{ comment.comment }}
    .flex(v-if="comments.length > 2")
      a.btn.btn-blue(@click.prevent="toggleReviews")
        i.icon.icon-arrow(:class="{ 'active' : show }")
        | {{ show ? 'Скрыть' : 'Развернуть вcе отзывы' }}
      //- .flex
      //-   a.btn.btn-blue.big Оставить отзыв
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export default {
  props: {
    comments: {
      type: Array,
      required: true
    },
    initiativeId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
      comment: ''
    }
  },
  computed: {
    ...mapState('auth', ['auth', 'profile']),

    returnComments() {
      const array = this.comments.slice()
      return array.sort(this.sortByDate)
    }
  },
  mounted() {
    this.hideComments()
  },
  methods: {
    ...mapActions('initiative', ['newComment']),
    ...mapMutations('initiative', ['SET_COMMENT']),

    async addComment() {
      if (this.auth) {
        const data = {
          comment: this.comment,
          initiativeId: +this.initiativeId,
          user: this.profile
        }
        await this.newComment(data)
        this.SET_COMMENT(data)
        this.comment = ''
      }
    },

    sortByDate(e1, e2) {
      return e1.createdAt < e2.createdAt ? 1 : -1
    },

    date(d) {
      dayjs.locale('ru')
      const date = dayjs(d)
      return date.format('D MMMM YYYY')
    },

    hideComments() {
      if (this.comments.length > 2) {
        const list = this.$refs.reviewList
        let listHeight = 0
        let i = 0
        while (i < 2) {
          listHeight += list.children[i].offsetHeight
          i++
        }
        list.style = `height: ${listHeight}px`
      }
    },

    toggleReviews() {
      if (this.show) {
        this.hideComments()
        window.scroll({ top: this.$refs.review.offsetTop, behavior: 'smooth' })
      } else {
        this.$refs.reviewList.style = ''
      }
      this.show = !this.show
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.review
  padding-bottom: 30px
  margin-bottom: 50px
  border-bottom: 1px solid grey
  &__block
    display: flex
    flex-wrap: wrap
    @media (max-width: 767px)
      display: block
  &__list
    transition: all .3s
    overflow: hidden
    .review__block
      padding: 20px 0
      border-top: 1px solid grey
      p
        font-size: 16px
        font-weight: 500
        font-style: normal
        font-stretch: normal
        line-height: 1.63
        letter-spacing: normal
        text-align: left
        color: $black
  h2
    font-size: 28px
    font-family: $fira
    font-weight: 600
    line-height: 1.43
    text-align: left
    color: $black
    width: 100%
    margin-bottom: 50px
  .btn
    i
      transition: all 0.3s
      &.active
        transform: rotate(-180deg)
        top: -1px
  &__image
    width: 120px
    height: 120px
    overflow: hidden
    border-radius: 4px
    margin-right: 50px
    &_guest
      border-radius: 50%
    @media (max-width: 767px)
      width: 70px
      height: 70px
      margin-right: 15px
      margin-bottom: 0
      float: left
    img
      width: 100%
      height: 100%
      object-fit: cover
  &__content
    flex: 1
    h3
      font-size: 16px
      line-height: 1.63
      text-align: left
      color: $black
      margin-bottom: 8px
      @media (max-width: 767px)
        min-height: 70px
        display: flex
        justify-content: center
        flex-direction: column
        margin-bottom: 18px
      i
        font-weight: 500
    textarea
      width: 100%
      height: 86px
      border-radius: 4px
      box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
      background-color: $white
      font-size: 16px
      font-weight: 500
      line-height: 1.63
      color: $black
      border: none
      padding: 15px
      @media (max-width: 767px)
        height: 150px
      &::placeholder
        color: $black
  .w-100
    width: 100%
    .btn
      margin-top: 40px
      margin-bottom: 65px
  .mb
    margin-bottom: 40px
    @media (max-width: 767px)
      margin: 0 auto 40px
  .btn
    @media (max-width: 767px)
      margin: 0 auto
      font-size: 12px
</style>
