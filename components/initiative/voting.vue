<template lang="pug">
  div.sticky#voting
    .voting(v-if="start")
      h2.blue Голосование стартует 1 февраля 2020 года
      h3 Оставьте слова поддержки организаторам:
      a.btn.btn-blue.big Написать отзыв
      a.org(href="#") Связаться с организатором
      .share Поделиться с друзьями:
      Socials(
        :title="`Инициатива - ${initiativeTitle}`"
      )
    .voting(v-if="!authBlock && !voteSuccess && !voteCritique")
      h2 Проголосуйте за&nbsp;нашу инициативу:
      .user(v-if="auth")
        .user__photo
          img(:src="profile && profile.image")
        .user__name Вы авторизованы: {{ profile && profile.userName }}
        .flex
          button.user__logout(@click="logout") Выйти
      p Народное интернет-голосование проводится с 1 февраля по&nbsp;30&nbsp;ноября 2020 года
      .rating.rating-1
        p Универсальность
        .rating__block
          input#rating-1-5(type="radio" value="5" name="rating-1" v-model="common")
          label(for="rating-1-5") 5
          input#rating-1-4(type="radio" value="4" name="rating-1" v-model="common")
          label(for="rating-1-4") 4
          input#rating-1-3(type="radio" value="3" name="rating-1" v-model="common")
          label(for="rating-1-3") 3
          input#rating-1-2(type="radio" value="2" name="rating-1" v-model="common")
          label(for="rating-1-2") 2
          input#rating-1-1(type="radio" value="1" name="rating-1" v-model="common")
          label(for="rating-1-1") 1
      .rating.rating-1
        p Социальная значимость
        .rating__block
          input#rating-2-5(type="radio" value="5" name="rating-2" v-model="social")
          label(for="rating-2-5") 5
          input#rating-2-4(type="radio" value="4" name="rating-2" v-model="social")
          label(for="rating-2-4") 4
          input#rating-2-3(type="radio" value="3" name="rating-2" v-model="social")
          label(for="rating-2-3") 3
          input#rating-2-2(type="radio" value="2" name="rating-2" v-model="social")
          label(for="rating-2-2") 2
          input#rating-2-1(type="radio" value="1" name="rating-2" v-model="social")
          label(for="rating-2-1") 1
      .rating.rating-1
        p Уровень реализации
        .rating__block
          input#rating-3-5(type="radio" value="5" name="rating-3" v-model="level")
          label(for="rating-3-5") 5
          input#rating-3-4(type="radio" value="4" name="rating-3" v-model="level")
          label(for="rating-3-4") 4
          input#rating-3-3(type="radio" value="3" name="rating-3" v-model="level")
          label(for="rating-3-3") 3
          input#rating-3-2(type="radio" value="2" name="rating-3" v-model="level")
          label(for="rating-3-2") 2
          input#rating-3-1(type="radio" value="1" name="rating-3" v-model="level")
          label(for="rating-3-1") 1
      button.btn.btn-red(@click="sendForm") Проголосовать
      .count Отдано голосов: {{ initiativeVotes }}
      .share Поделиться с друзьями:
      Socials(
        :title="`Голосование за инициативу - ${initiativeTitle}`"
      )
    .voting(v-if="authBlock")
      h2 Вы собираетесь проголосовать
      p Прежде чем выставить оценки, необходимо авторизоваться в одной из социальных сетей:
      .auth
        a.btn(v-for="(item, i) in socialsArray" :key="i" :class="item.className" :href="item.link" @click.prevent="signIn(item.slug)") {{ item.name }}
        a(href="") Почему используются именно <br>эти социальные сети для<br> авторизации?
    .voting(v-if="voteSuccess")
      h2.blue Ваш голос принят!
      .user(v-if="auth")
        .user__photo
          img(:src="profile && profile.image")
        .user__name Вы авторизованы: {{ profile && profile.userName }}
        .flex
          button.user__logout(@click="logout") Выйти
      .before(v-if="voteState && !voteState.Errors") <b>До</b> Вашего голоса, рейтинг участника составлял: <b>{{ voteState && voteState.currentRating }}</b>
      .before(v-else) {{ voteState && voteState.Errors }}
      .after(v-if="voteState && !voteState.Errors") <b>После</b> Вашего голоса, рейтинг участника составляет: <b>{{ voteState && voteState.newRating }}</b>, а текущее место в номинации «{{ initiativeCategory }}» стало: <b>{{ voteState && voteState.newPosition }}</b>
      .count Отдано голосов: {{ voteState && voteState.voice }}
      h3 Оставьте слова поддержки организаторам:
      a.btn.btn-blue.big Написать отзыв
      a.org(href="#") Связаться с организатором
      .count
      .share Поделиться с друзьями:
      Socials(
        :title="`Голосование за инициативу - ${initiativeTitle}`"
      )
    .voting(v-if="voteCritique")
      h2.blue Вы решили поставить инициативе занижающую оценку
      .user(v-if="auth")
        .user__photo
          img(:src="profile && profile.image")
        .user__name Вы авторизованы: {{ profile && profile.userName }}
        .flex
          button.user__logout(@click="logout") Выйти
      .before <b>До</b> Вашего голоса, рейтинг участника составлял: <b>{{ voteState && voteState.currentRating }}</b>
      .after <b>После</b> Вашего голоса, рейтинг участника составляет: <b>{{ voteState && voteState.newRating }}</b>, а текущее место в номинации «{{ initiativeCategory }}» стало: <b>{{ voteState && voteState.newPosition }}</b>
      p.voting__critique
        b Очевидно, есть причины для этого. Для того, чтобы Ваш голос был засчитан, сформулируйте кратко Ваши аргументы и мы перешлём их организатору инициативы. Голос не будет засчитан при отсутствии конструктивной критики.
      button.btn.btn-red(@click="critiqueSend = true, sendForm()") Проголосовать
      .count Отдано голосов: {{ initiativeVotes }}
    //- .voting(v-if="!needAuth && !voted && !low && !stop && !laureate")#voting
      h2 Проголосуйте<br>за нашу инициативу:
      .user(v-if="loggedIn")
        .user__photo
          img(src="/img/initiative/photo.jpg")
        .user__name Вы авторизованы: Ержанова Динара
        .flex
          button.user__logout(@click="logout") Выйти
      .rating
        p(:class="{ 'text-red' : clicked }") Ждём Вас в начале 2020 года!
      .rating.rating-1
        p Общее впечатление
        .rating__block
          input#rating-1-5(type="radio" value="5" name="rating-1")
          label(for="rating-1-5") 5
          input#rating-1-4(type="radio" value="4" name="rating-1")
          label(for="rating-1-4") 4
          input#rating-1-3(type="radio" value="3" name="rating-1")
          label(for="rating-1-3") 3
          input#rating-1-2(type="radio" value="2" name="rating-1")
          label(for="rating-1-2") 2
          input#rating-1-1(type="radio" value="1" name="rating-1")
          label(for="rating-1-1") 1
      .rating.rating-1
        p Социальная значимость
        .rating__block
          input#rating-2-5(type="radio" value="5" name="rating-2")
          label(for="rating-2-5") 5
          input#rating-2-4(type="radio" value="4" name="rating-2")
          label(for="rating-2-4") 4
          input#rating-2-3(type="radio" value="3" name="rating-2")
          label(for="rating-2-3") 3
          input#rating-2-2(type="radio" value="2" name="rating-2")
          label(for="rating-2-2") 2
          input#rating-2-1(type="radio" value="1" name="rating-2")
          label(for="rating-2-1") 1
      .rating.rating-1
        p Уровень реализации
        .rating__block
          input#rating-3-5(type="radio" value="5" name="rating-3")
          label(for="rating-3-5") 5
          input#rating-3-4(type="radio" value="4" name="rating-3")
          label(for="rating-3-4") 4
          input#rating-3-3(type="radio" value="3" name="rating-3")
          label(for="rating-3-3") 3
          input#rating-3-2(type="radio" value="2" name="rating-3")
          label(for="rating-3-2") 2
          input#rating-3-1(type="radio" value="1" name="rating-3")
          label(for="rating-3-1") 1
      button.btn.btn-red(@click="clicked = true") Проголосовать
        - @click="sendData"
        - .count Отдано голосов: 15
        - .share Поделиться с друзьями:
    //- .voting(v-if="needAuth")
    //-   h2 Вы собираетесь<br> проголосовать
    //-   p Ваш голос будет засчитан после авторизации в одной из социальных сетей
    //-   .auth
    //-     a.btn.btn-facebook(@click="login") Facebook
    //-     a.btn.btn-vk(@click="login") ВКонтакте
    //-     a.btn.btn-mail(@click="login") Mail.ru
    //-     a.btn.btn-google(@click="login") Google
    //-     a(href="") Почему используются именно <br>эти социальные сети для<br> авторизации?
    //- .voting(v-if="voted && !needAuth")
    //-   h2.blue Ваш голос принят!
    //-   .user
    //-     .user__photo
    //-       img(src="/img/initiative/photo.jpg")
    //-     .user__name Вы авторизованы: Ержанова Динара
    //-     .flex
    //-       button.user__logout(@click="logout") Выйти
    //-   //- .before <b>До</b> Вашего голоса, рейтинг участника составлял: <b>4.94</b> а, текущее место в номинации«Наш общий дом Россия» было: <b>5</b>
    //-   //- .after <b>После</b> Вашего голоса, рейтинг участника составляет: <b>4.96</b> а, текущее место в номинации «Наш общий дом Россия» стало: <b>5</b>
    //-   .before Конкурс 2020 года скоро начнётся. Ждём Вас в начале 2020 года!
    //-   .count Отдано голосов: 16
    //-   h3 Оставьте слова поддержки организаторам:
    //-   a.btn.btn-blue.big Написать отзыв
    //-   a.org(href="#") Связаться с организатором
    //-   .share Поделиться с друзьями:
    //- .voting(v-if="low")
    //-   h2.blue Вы решили поставить инициативе занижающую оценку
    //-   .user(v-if="loggedIn")
    //-     .user__photo
    //-       img(src="/img/initiative/photo.jpg")
    //-     .user__name Вы авторизованы: Ержанова Динара
    //-     .flex
    //-       button.user__logout(@click="logout") Выйти
    //-   .before <b>До</b> Вашего голоса, рейтинг участника составлял: <b>4.94</b> а, текущее место в номинации«Наш общий дом Россия» было: <b>5</b>
    //-   .after <b>После</b> Вашего голоса, рейтинг участника составляет: <b>4.96</b> а, текущее место в номинации «Наш общий дом Россия» стало: <b>5</b>
    //-   h3 Очевидно, есть причины для этого. Для того, чтобы Ваш голос был засчитан, сформулируйте кратко Ваши аргументы и мы перешлём их организатору инициативы.Голос не будет засчитан при отсутствии конструктивной критики.
    //-   textarea(placeholder="Ваше сообщение...")
    //-   a(href="#").btn.btn-red Проголосовать
    //-   .count(v-if="!laureate") Отдано голосов: 16
    //- .voting(v-if="stop")
    //-   h2.blue Данная инициатива временно приостановила свою деятельность и пока не принимает участие в голосовании
    //-   .user(v-if="loggedIn")
    //-     .user__photo
    //-       img(src="/img/initiative/photo.jpg")
    //-     .user__name Вы авторизованы: Ержанова Динара
    //-     .flex
    //-       button.user__logout(@click="logout") Выйти
    //-   .count(v-if="!laureate") Отдано голосов: 16
    //-   h3 Оставьте слова поддержки организаторам:
    //-   a.btn.btn-blue.big Написать отзыв
    //-   a.org(href="#") Связаться с организатором
    //-   .share Поделиться с друзьями:
    //- .voting(v-if="laureate")
    //-   h2.blue Данная инициатива стала лауреатом конкурса в 2018 году и не принимает участие в голосовании
    //-   h3 Оставьте слова поддержки организаторам:
    //-   a.btn.btn-blue.big Написать отзыв
    //-   a.org(href="#") Связаться с организатором
    //-   .share Поделиться с друзьями:
</template>

<script>
import Socials from '@/components/socials'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Socials
  },
  props: {
    initiativeTitle: {
      type: String,
      default: ''
    },
    initiativeId: {
      type: String,
      default: ''
    },
    initiativeVotes: {
      type: Number,
      default: 0
    },
    initiativeCategory: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      start: false,
      authBlock: false,
      voteSuccess: false,
      voteCritique: false,
      critiqueSend: false,
      voteState: null,
      loggedIn: false,
      needAuth: false,
      voted: false,
      low: false,
      stop: false,
      laureate: false,
      clicked: false,
      common: null,
      social: null,
      level: null
    }
  },
  computed: {
    ...mapState('auth', ['auth', 'socials', 'profile']),

    averageScore() {
      if (this.common && this.social && this.level) {
        if ((+this.common + +this.social + +this.level) / 3 < 4) {
          return false
        }
      }
      return true
    },

    socialsArray() {
      const array = this.socials
      const newArr = []
      for (const i in array) {
        let row = null
        if (i === 'vk') {
          row = {
            name: 'ВКонтакте',
            slug: 'vk',
            link: array[i].url,
            className: 'btn-vk'
          }
          // } else if (i === 'mailRu') {
          //   row = {
          //     name: 'Mail.ru',
          //     slug: 'mail',
          //     link: array[i].url,
          //     className: 'btn-mail'
          //   }
        } else if (i === 'facebook') {
          row = {
            name: 'Facebook',
            slug: 'fb',
            link: array[i].url,
            className: 'btn-facebook'
          }
        }
        if (row) {
          newArr.push(row)
        }
      }
      return newArr
    }
  },
  watch: {
    auth(data) {
      if (data) {
        this.authBlock = false
      }
    }
  },
  mounted() {
    this.getSocialsUrl()
  },
  methods: {
    ...mapActions('auth', [
      'getSocialsUrl',
      'fbSignIn',
      'vkSignIn',
      'vkSignOut',
      'fbSignOut'
    ]),
    ...mapActions('initiative', ['newVote']),

    signIn(slug) {
      switch (slug) {
        case 'vk':
          this.vkSignIn()
          break
        case 'fb':
          this.fbSignIn()
          break
        default:
          return false
      }
    },

    async sendForm() {
      this.voteCritique = false
      if (!this.auth) {
        this.authBlock = true
        return false
      }
      if (!this.averageScore && !this.critiqueSend) {
        this.voteCritique = true
        return false
      }
      const response = await this.newVote({
        initiativeId: +this.initiativeId,
        versatility: +this.common,
        socialSignificance: +this.social,
        implementationLevel: +this.level,
        user: this.profile
      })

      this.voteState = response
      this.voteSuccess = true
    },

    logout() {
      if (this.auth) {
        if (this.profile.social === 'vkontakte') {
          this.vkSignOut()
        } else if (this.profile.social === 'facebook') {
          this.fbSignOut()
        }
      }
    }
    // sendData() {
    //   if (!this.loggedIn) {
    //     this.needAuth = true
    //   }
    // },
    // logout() {
    //   this.loggedIn = false
    // },
    // login() {
    //   this.needAuth = false
    //   this.loggedIn = true
    //   this.voted = true
    // }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.sticky
  position: sticky
  top: 10px
.voting
  padding-top: 38px
  width: 270px
  @media (max-width: 767px)
    width: 100%
  .btn
    width: 100%
  p.text-red
    color: #f53c4d
  h2
    font-family: $fira
    font-weight: 600
    font-size: 26px
    line-height: 32px
    color: $black
    margin-bottom: 14px
    &.blue
      color: $blue
  h3
    font-size: 18px
    font-weight: bold
    font-style: normal
    font-stretch: normal
    line-height: 1.44
    letter-spacing: normal
    text-align: left
    color: $black
    margin-top: 33px
    margin-bottom: 20px
  p
    font-size: 14px
    font-weight: 500
    line-height: 1.57
    text-align: left
    color: $black
    margin-bottom: 35px
  .rating
    margin-bottom: 20px
    p
      font-size: 18px
      font-weight: 500
      font-style: normal
      font-stretch: normal
      line-height: 1.44
      letter-spacing: normal
      text-align: left
      color: $black
      margin-bottom: 5px
    &__block
      display: flex
      flex-direction: row-reverse
      border: solid 1px $very-light-pink-three
      border-radius: 4px
      width: 270px
      overflow: hidden
    input
      display: none
    label
      width: 54px
      height: 54px
      display: flex
      align-items: center
      justify-content: center
      font-size: 28px
      font-weight: 600
      font-style: normal
      font-stretch: condensed
      line-height: 1.14
      color: #666666
      cursor: pointer
      &:not(:last-child)
        border-left: 1px solid $very-light-pink-three
      &:nth-of-type(5)
        border-top-left-radius: 4px
        border-bottom-left-radius: 4px
        border-left: 1px solid $very-light-pink-three
      &:nth-of-type(1)
        border-top-right-radius: 4px
        border-bottom-right-radius: 4px
    label:hover
      background: $white
      color: $red
    label:hover ~ label
      background: $white
      color: $red
    input:checked ~ label
      background: $red
      color: $white
  .before, .after
    font-size: 14px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    line-height: 1.57
    letter-spacing: normal
    text-align: left
    color: $black
    margin-bottom: 30px
  .count, .share
    font-size: 16px
    font-weight: 500
    font-style: normal
    font-stretch: normal
    letter-spacing: normal
    text-align: left
    color: #666666
  .count
    margin-top: 20px
  .share
    margin-top: 35px
  .org
    display: block
    margin-top: 24px
    margin-bottom: 37px
    font-weight: 500
  &__critique
    font-size: 16px
    line-height: 26px
    margin-bottom: 30px
.user
  display: flex
  flex-wrap: wrap
  align-items: center
  margin-bottom: 20px
  .flex
    width: 100%
  &__photo
    border-radius: 4px
    box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
    background-color: $white
    width: 60px
    height: 60px
    overflow: hidden
    margin-right: 15px
    img
      width: 100%
      height: 100%
      object-fit: cover
  &__name
    flex: 1
    font-size: 16px
    font-weight: bold
    font-style: normal
    font-stretch: normal
    line-height: 1.63
    letter-spacing: normal
    text-align: left
    color: $black
  &__logout
    margin-top: 10px
    padding: 6px
    border-radius: 4px
    background-color: $blue
    color: $white
    cursor: pointer
.auth
  .btn
    margin-bottom: 20px
  a
    text-align: center
    display: inline-block
</style>
