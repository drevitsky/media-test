<template lang="pug">
  .alert(v-if="alert")
    .container-fluid
      .row.middle-sm
        .col-sm-10.col-md-10
          p Названы лауреаты Национальной премии «Гражданская инициатива» - 2019
            nuxt-link(to="/events#1409") Подробно
        .col-sm-2.close_con
          .close.flex.end-sm(@click="close")
            p.desctop Скрыть сообщение
            p.mobile Скрыть сообщение
</template>

<script>
import Cookie from 'js-cookie'
export default {
  data() {
    return {
      alert: false
    }
  },
  mounted() {
    if (Cookie.get('alert') === undefined) {
      this.alert = true
    }
  },
  methods: {
    close() {
      this.alert = false
      Cookie.set('alert', 'hide', { expires: 15 })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.alert
  height: 50px
  box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
  background: $white
  font-size: 18px
  font-weight: 500
  font-family: $mont
  position: relative
  z-index: 10
  padding: 15px 0
  @media (max-width: 767px)
    height: auto
    font-size: 12px
  p
    line-height: 1.44
    text-align: left
    color: $black
    a
      color: $blue
      margin-left: 7px
  .close_con
    @media (max-width: 767px)
      width: 100%
    .close
      cursor: pointer
      text-align: center
      p
        color: #f53c4d
        @media (max-width: 767px)
          font-size: 12px
          margin: 15px auto 0
</style>
