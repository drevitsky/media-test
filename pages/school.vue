<template lang="pug">
  .school
    .container-fluid
      .row.school-intro.block
        .col-sm-5.description
          .heading
            h1 Школа гражданской инициативы
          p.description__text Участники конкурса Гражданская Инициатива делятся реальным опытом реализации своих уникальных проектов. Это действующие, успешные инициативы созданные с нуля, как отклик на потребности окружающих людей. Этот опыт не описан в учебниках. Мы рады предоставить возможность поделиться этим знанием со всеми.
          h3.description__title В каждом уроке, по заинтересовавшей вас теме, вы узнаете:
          ol.description__list
            li.description__item С чего начать.
            li.description__item Как привлечь единомышленников и волонтёров. Как организовать мероприятия на уровне города, страны. Как привлечь СМИ. Как легализовать свою деятельность.
            li.description__item Как привлечь спонсорскую помощь и заручиться государственной поддержкой.
    .mobile.mobile-intro
    allSchools
</template>

<script>
import allSchools from '~/components/school/allSchools'
export default {
  components: {
    allSchools
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.school
  &-intro
    background: url(/img/school/bg-school.jpg)
    background-size: contain
    background-repeat: no-repeat
    background-position: 300px 0
    padding: 75px 0 0
    @media (max-width: 767px)
      background: transparent
      padding-top: 0
  .banner
  // padding-top: 50px
  position: relative
  &:before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: -1
    height: 1000px
    display: block
  .heading h1
    margin-bottom: 30px
.description
  min-height: 706px
  font-size: 18px
  line-height: 1.78
  font-weight: 500
  &__text
    padding: 8px 0
    font-size: 18px
    line-height: 1.78
    margin-bottom: 30px
  &__title
    margin-bottom: 30px
  &__list
    counter-reset: myCounter
    line-height: 1.78
  &__item
    list-style: none
    margin-bottom: 30px
    &:before
      counter-increment: myCounter
      content: counter(myCounter)'.'
      font-weight: 500
      color: $blue
      margin-right: 6px
.mobile-intro
  height: 322px
  width: 100%
  background: url(/img/school/bg_mobile.jpg)
  background-size: cover
  background-repeat: no-repeat
  background-position: 50% 0%
.block
  padding-bottom: 82px
  // margin-bottom: 50px
  border-bottom: 1px solid grey
</style>
