<template lang="pug">
  .step
    .container-fluid.container-padding
      .row
        .col-xs-12
          .heading.big
            h2 Этапы конкурса
          h3 Старт 1 февраля 2020 года!
          p Открыт приём заявок от организаторов инициатив на участие в конкурсе<br v-if="!isMobile()"> и дан старт интернет-голосования для посетителей сайта за инициативы в текущем году! <br>Народное голосование продолжается до ноября 2020 года.
          .flex.justify-center
            a.btn.btn-red.application_link(href="#order_info" @click="openModal('order_info')") Предложить инициативу
          .flex.justify-center
            img.line(src="/img/ui/arrow-down.svg", alt="")
          .heading
            h2 Региональные этапы конкурса
          p Каждый год определяются от трёх до пяти городов, в которых проводятся награждения<br> региональных инициатив. Участники и лауреаты региональных этапов наравне с другими инициативами<br> продолжают участие в Федеральном конкурсе.
          nuxt-link.link(to="/years") В каких городах уже прошли региональные премии?
          .step__row
            .step__block
              img(src="/img/home/step/herb-3.png", alt="")
              span Томск
              nuxt-link(to="/years/2020/36" class="btn btn-transparent") Подробнее
            .step__block
              img(src="/img/home/step/herb-perm.png", alt="")
              span Пермь
              nuxt-link(to="/years/2020/37" class="btn btn-transparent") Подробнее
            .step__block
              img(src="/img/home/step/herb-smolensk.png", alt="")
              span Смоленск
              nuxt-link(to="/years/2020/38" class="btn btn-transparent") Подробнее
            .step__block
              img(src="/img/home/step/herb-federal.png", alt="")
              span Федеральная
              nuxt-link(to="/years/2020/40" class="btn btn-transparent") Подробнее
          .flex.justify-center
            img.line(src="/img/ui/arrow-down.svg", alt="")
          .heading
            h2 Федеральный конкурс
          p По итогам народного голосования с февраля по ноябрь экспертный совет формирует шорт-лист номинантов, в который входят<br> первые 3 лидирующих места в рейтинге каждой номинации, а также несколько инициатив на усмотрение экспертов<br> вне зависимости от занимаемого в рейтинге места. После чего, большое жюри определяет большинством голосов<br> победителей в каждой номинации, учитывая положение в рейтинге.
          .step__row__two
            .step__block__two
              img(src="/img/home/step/1.svg", alt="")
              h4 Экспертное<br>голосование
              span в начале декабря 2020 года
            .step__block__two
              img(src="/img/home/step/2.svg", alt="")
              h4 Голосование<br> большого жюри
              span середина декабря 2020 года
            .step__block__two
              img(src="/img/home/step/3.svg", alt="")
              h4 Церемония<br> награждения
              span декабрь 2020 года<br> точная дата и время будут объявлены<br> за 2 недели до начала церемонии
          .heading
            h2 Важен каждый голос!
          p Отдайте свой голос достойным поддержки инициативам!<br v-if="isMobile()"> Голос каждого<br v-if="!isMobile()"> посетителя портала - возможность для инициативы заявить о себе на всю<br v-if="!isMobile()"> страну - привлечь внимание СМИ, жителей и властей своего города.
          a.link(href="#") Кто и как определяет победителей?
          .step__image
            img.desctop(src="/img/home/step/image.png", alt="")
            //- img.mobile(src="/img/home/step/image_mob.png", alt="")
            .step__image__row.desctop
              p Ознакомьтесь с инициативами<br> в разных номинациях
              p Проголосуйте за понравившуюся <br>инициативу
              p Поделитесь<br> в социальных сетях
          .step__ruble
            img(src="/img/home/step/ruble.svg", alt="")
            p Обратите внимание! На странице каждой инициативы есть<br> контактная информация организатора, а также проверенные<br> банковские реквизиты для прямой адресной поддержки.
</template>

<script>
export default {
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.step
  padding-bottom: 60px
  .heading
    text-align: center
    h2
      margin-bottom: 35px
      @media (max-width: 767px)
        font-size: 22px
        margin-bottom: 15px
    &.big
      h2
        font-size: 66px
        @media (max-width: 767px)
          font-size: 22px
          margin-bottom: 15px
  h3
    text-align: center
    font-family: $fira
    font-size: 28px
    font-weight: 600
    line-height: 1.89
    text-align: center
    color: $black
    margin-bottom: 12px
    @media (max-width: 767px)
      font-size: 18px
  p
    font-family: $mont
    font-size: 18px
    font-weight: 500
    line-height: 1.67
    text-align: center
    color: $black
    margin-bottom: 25px
    @media (max-width: 767px)
      font-size: 14px
  .btn
    margin-bottom: 38px
    height: 70px
    font-size: 20px
    padding: 0 39px
    @media (max-width: 767px)
      font-size: 14px
      line-height: 1.3
      text-align: center
      margin-bottom: 15px
      padding: 0
      width: 100%
      max-width: 320px
    &.btn-transparent
      border: 1px solid #1f4fa7
      border-radius: 5px
      padding: 0 15px
      height: 40px
      margin-top: 30px
      margin-bottom: 0
      font-size: 16px
      color: #1f4fa7
      &:hover
        color: #fff
        background: #1f4fa7
  .line
    margin-bottom: 35px
    @media (max-width: 767px)
      margin-bottom: 15px
  .link
    color: $neon-red
    font-family: $mont
    font-size: 20px
    font-weight: bold
    text-align: center
    display: block
    margin-bottom: 50px
    @media (max-width: 767px)
      font-size: 16px
  &__row
    display: flex
    margin-bottom: 60px
    @media (max-width: 767px)
      flex-wrap: wrap
      margin-bottom: 0px
  &__block
    width: 25%
    height: 335px
    background: $white
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    border-radius: 4px
    box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
    margin-right: 30px
    @media (max-width: 767px)
      width: 100%
      margin: 0 0 20px 0
      height: 300px
    &:not(:last-child)
      margin-right: 30px
      @media (max-width: 767px)
        margin-right: 0
    img
      margin-bottom: 20px
    h4
      font-size: 22px
      font-weight: bold
      font-family: $mont
    p
      font-size: 16px
      font-weight: 500
    span
      font-family: $mont
      position: relative
      font-weight: 500
      top: 17px
  &__row__two
    display: flex
    justify-content: center
    margin-top: 40px
    @media (max-width: 767px)
      flex-wrap: wrap
      margin: 40px 0
  &__block__two
    background: $white
    width: 380px
    height: 270px
    border-radius: 4px
    box-shadow: 0px 3px 8px 0 rgba(62, 73, 85, 0.1)
    display: flex
    margin-bottom: 130px
    align-items: center
    padding-top: 30px
    flex-direction: column
    @media (max-width: 767px)
      width: 100%
      margin-bottom: 30px
      padding: 30px 0
      height: auto
    &:not(:last-child)
      margin-right: 26px
      @media (max-width: 767px)
        margin-right: 0
    img
      width: 72px
      margin-bottom: 25px
    h4
      text-align: center
      font-family: $mont
      font-size: 22px
      margin-bottom: 5px
      line-height: 1.3
    span
      font-size: 16px
      font-weight: 500
      color: $black
      font-family: $mont
      text-align: center
      line-height: 1.4
  &__image
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 42px
    @media (max-width: 767px)
      margin-bottom: 0
    img
      width: 1040px
      @media (max-width: 767px)
        width: 100%
        max-width: 320px
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25)
    &__row
      width: 1000px
      display: flex
      justify-content: space-between
      p
        text-align: left
        font-size: 16px
        margin-top: 12px
  &__ruble
    display: flex
    justify-content: center
    align-items: center
    img
      width: 120px
      height: 120px
      margin-right: 30px
      @media (max-width: 767px)
        width: 50px
        height: 50px
        margin-right: 10px
    p
      text-align: left
      margin-bottom: 0
      font-size: 16px
      @media (max-width: 767px)
        font-size: 12px
      br
        @media (max-width: 767px)
          display: none
</style>
