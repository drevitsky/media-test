<template lang="pug">
  .partners
    .container-fluid.container-padding
      .row
        .col-xs-12
          .heading
            h2 Партнёры
          .partners__row
            .flex
              a(href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/" target="_blank")
                img(src="/img/home/partners/7.png", alt="")
              a(href="https://otr-online.ru/" target="_blank")
                img(src="/img/home/partners/1.png", alt="")
              a(href="https://planeta.ru/" target="_blank")
                img(src="/img/home/partners/3.png", alt="")
            .flex
              a(href="http://tppsk.ru/ru/" target="_blank")
                img(src="/img/home/partners/4.png", alt="")
              a(href="https://vivt.ru/" target="_blank")
                img(src="/img/home/partners/5.png", alt="")
              a(href="https://narfu.ru/" target="_blank")
                img(src="/img/home/partners/6.png", alt="")
          .partners__information
            p По вопросам партнерства: <a href="mailto:info@premiagi.ru">info@premiagi.ru</a>.
            p Пресс-центр: <a href="mailto:pressa@premiagi.ru">pressa@premiagi.ru</a>,
            p телефон: <a href="tel:+7 (999) 866-07-01">+7 (999) 866-07-01</a>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.partners
  padding: 30px 0 0
  .heading
    margin-bottom: 53px
    h2
      @media (max-width: 767px)
        font-size: 22px
  p
    font-family: $mont
    font-size: 18px
    font-weight: 500
    line-height: 1.63
    text-align: left
    color: $greyish-brown
    @media (max-width: 767px)
      font-size: 14px
    a
      color: $blue
      padding-left: 5px
  &__row
    margin-bottom: 60px
    display: flex
    flex-direction: column
    justify-content: center
    flex-wrap: wrap
    .flex
      display: flex
      justify-content: space-between
    a
      width: 33%
      margin: 20px 0
      display: flex
      align-items: center
      justify-content: center
      @media (max-width: 767px)
        margin: 10px
      img
        object-fit: contain
        height: 90px
  &__information
    display: flex
    @media (max-width: 767px)
      flex-direction: column
    p
      margin-right: 5px
      @media (max-width: 480px)
        font-size: 12px
        margin-right: 0
</style>
