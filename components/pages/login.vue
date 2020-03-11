<template lang="pug">
  Modal(:classes="['modal', 'v--modal']" name="login" width="900px" height="auto" :scrollable="true" :adaptive="false" @before-close="beforeClose")
    .modal__header
      .close(@click="closeModal('login')")
        i.icon.icon-close
        | Закрыть
    .modal__content
      h3 Вход для организаторов
      form.form(@submit="submit")
        .form__line
          label.form__label Логин (email)
          input.form__input(v-model="login")
        .form__line
          label.form__label Пароль
          input.form__input(type="password" v-model="password")
          a.form__link(href="#") Забыли пароль?
        .form__line
          button.btn.btn-red Войти
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['signIn']),

    async submit() {
      if (!this.login || !this.password) {
        return false
      }
      await this.signIn({
        email: this.login,
        password: this.password
      })
      this.login = ''
      this.password = ''
      this.closeModal('login')
    }
  }
}
</script>

<style lang="sass" scoped>
.modal__content
  text-align: center
  h3
    text-align: center
    margin-bottom: 47px
  .form
    max-width: 300px
    width: 100%
    margin: 0 auto
    font-size: 18px
    line-height: 32px
    &__line
      margin-bottom: 40px
      display: flex
      flex-direction: column
      justify-content: center
      &:last-child
        margin-bottom: 0
    &__label
      margin-bottom: 6px
    &__input
      padding: 0 15px
      background: #f2f2f2
      border: 1px solid #8b99a7
      border-radius: 4px
      height: 50px
    &__link
      // margin-bottom: 36px
      margin-top: 18px
      color: #1f4fa7
      font-weight: 500
      text-decoration: none
      margin-left: 0
</style>
