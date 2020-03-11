<template lang="pug">
  .contest
    .container-fluid.container-padding
      .white
        .row
          .col-xs-12
            .heading
              h2 Конкурс 2020 года
          .col-sm-6
            p В задачи конкурса входит поиск новых лиц современного российского общества, неизвестных героев нашего времени, которые уже проявили себя в своем городе, районе, области, республике. Эти люди сами, по своей инициативе, пытаются что-то изменить и уже добились конкретных результатов или только начинают реализовывать задуманное на практике. И они достойны того, чтобы в России узнали об их начинаниях и бескорыстном труде.
            ul
              li
                a(href="#position" @click="openModal('position')") Положение
              //- li
              //-   a(href="#") Положение о Региональных премиях
              li
                a(href="#expert" @click="openModal('expert')") Экспертный совет
              li
                a(href="#jury" @click="openModal('jury')") Большое жюри
              li
                a(href="#contact" @click="openModal('contact')") Контакты организационного комитета
          .col-sm-6.col-xs-12
            blockquote За семь лет существования конкурса в<br> нем приняли участие сотни инициатив<br> со всей страны. Из этих капель<br> (символа региональных этапов Премии)<br> и складывается море добрых дел.
            .contest__signature
              img(src="/img/home/contest/signature.png", alt="")
              .block
                h3 Алексей Кудрин
                p Председатель <br>Большого жюри <br>Премии
                //- Председатель <br>Комитета гражданских <br>инициатив
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '~assets/ui/vars'
.contest
  padding: 30px 0 120px
  @media (max-width: 767px)
    padding: 30px 0 60px
  .white
    padding: 45px 48px 25px
    @media (max-width: 767px)
      padding: 25px
  h2
    margin-bottom: 33px
    @media (max-width: 767px)
      font-size: 22px
  p
    font-family: $mont
    font-size: 18px
    font-weight: 500
    line-height: 1.67
    text-align: left
    color: $black
    margin-bottom: 24px
    padding-right: 60px
    @media (max-width: 767px)
      padding: 0
      font-size: 14px
  ul
    li
      a
        font-size: 20px
        color: $neon-red
        font-weight: bold
        line-height: 2.1
        font-family: $mont
        @media (max-width: 767px)
          font-size: 14px
          line-height: 1
          margin: 10px 0
          display: inline-block
  blockquote
    font-size: 28px
    font-family: $firacond
    font-weight: 300
    font-style: italic
    line-height: 39px
    text-align: left
    color: $black
    position: relative
    padding-left: 60px
    margin-bottom: 69px
    margin-left: 71px
    @media (max-width: 767px)
      font-size: 16px
      margin: 50px 0 0 0
      padding-left: 0
      text-indent: 30px
    &:before, &:after
      content: ''
      background: url(/img/ui/quote.svg)
      width: 32px
      height: 26px
      position: absolute
      @media (max-width: 767px)
        background-size: cover
        width: 16px
        height: 14px
    &:before
      left: 0
      top: 5px
    &:after
      transform: rotate(180deg)
      right: 50px
      bottom: 5px
      @media (max-width: 767px)
        right: unset
        left: 320px

  &__signature
    display: flex
    justify-content: center
    margin-left: 235px
    @media (max-width: 767px)
      margin: 30px 0 0 0
    img
      width: 165px
      height: 123px
      @media (max-width: 767px)
        width: 120px
        height: 90px
    .block
      margin-top: 63px
      margin-left: 10px
      h3
        font-family: $mont
        margin-bottom: 11px
      p
        line-height: 1.4
</style>
