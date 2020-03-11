<template lang="pug">
  .initiative
    .container-fluid
      .row
        .col-sm-2.col-xs-12
          Aside
        .col-sm-8.col-xs-12
          article.pl.pt.pr
            InitiativeHeader
            main
              Slider
              .block
                h2 Цели и задачи
                .block__content.big-size
                  p — Вовлечение инициативной и талантливой молодежи Омской области в социально-значимые проекты, сохранение нематериального культурного наследия, популяризации здорового и активного образа жизни.
                  p — Создание культурно-спортивной, оздоровительной, дискуссионной и экологической площадки для многонациональной молодежи Омской области по обмену опытом в сфере реализации деятельности национальных объединений, спортивных клубов в национальных организациях для сохранения и приумножения спортивных, культурных и интеллектуальных достижений молодежи, а также совершенствования системы эстетического воспитания многонациональной молодежи.
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              button.btn.btn-red.btn_scroll.mobile Проголосовать
              .block
                h2 Видео
              .block
                h2 Мы в интернете
                a.link(href="https://vk.com/liga_druzby") https://vk.com/liga_druzby
              .block
                h2 Целевая группа
                .block__content.big-size
                  p Представители общественных, национальных, культурно-творческих и молодежных организаций и образовательных учреждений в возрасте 18-30 лет.
                  p В 2017 году на форуме впервые были представлены команда из Павлодара, команда Российско-Африканской дружбы.
                  p Среди участников появились итальянцы! Численность организаций, принимающих участие в мероприятии: более 15. Количество участников: 200 человек.
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              button.btn.btn-red.btn_scroll.mobile Проголосовать
              hr.after_btn
              .block
                h2 Статистика
                .block__content
                  p Количественные результаты в цифрах: На спортивной площадке были представлены командные игры (волейбол, футбол, русская лапта), турнир по настольным иг рам. Ребята с команд знакомились с народными играми народов Сибири. Индивидуальные зачеты прошли в гиревом спорте, армреслинге, казакша курес. В культурной части были представлены более 15 творческих номеров молодежных команд. Качественные результаты: По итогам образовательной программы форума будет сформирован комплекс мероприятий, направленных на укрепление гражданского самосознания молодежи. По итогам спортивной программы названы победители в командных и индивидуальных соревнованиях, различные молодежные организации познакомятся с национальными играми. По итогам культурной программы проведены мастер-классы по народно-прикладному творчеству, все созданные изделия будут переданы в подарок спортивно-оздоровительному центру. Долгосрочные результаты: Вовлечение инициативной и талантливой молодежи Омской области в социально-значимые проекты, сохранение нематериального культурного наследия, популяризации здорового и активного образа жизни. Планируется проведение Второго молодежного форума, в рамках года экологии - будут представлены эко-квесты.
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              .block
                h2 О нас в СМИ
                .block__content
                  p Новости на ТВ Россия 24 - http://omsk.rfn.ru/rnews.html?id=323926
                  p Первый городской канал - https://www.youtube.com/watch?v=DA_G0_XL1BY
                  p Сайт Правительства Омской области (Омская Губерния) дата публикации 24.08.2016 Молодежный форум «Лига дружбы» соберет в Омской области более двухсот делегатов
                  p Сайт Молодежного информационного агентства «Мир», дата публикации 24.08.2016 Омская область: До старта «Лиги дружбы» осталось два дня
                  p Сайт Плюс Лайф, дата публикации 29.08.2016 «Лига дружбы» собрала активную молодежь Омска
                  p Омский бизнес портал Глобал55.ру, дата публикации 29.08.2016 ПЕРВЫЙ РЕГИОНАЛЬНЫЙ МОЛОДЕЖНЫЙ ФОРУМ «ЛИГА ДРУЖБЫ» ПРОШЕЛ В ОМСКОЙ ОБЛАСТИ
                  p Сайт Управления культуры администрации Омского муниципального района, дата публикации 29.08.2016 Команда Ассоциации молодых специалистов учреждений культуры «Импульс» представила Омский район на региональном молодежном форуме «Лига дружбы»
                  p Международный татарский портал, дата публикации 30.08.2016 Омская татарская молодёжная команда стала победителем на форуме ''Лига дружбы'' - Tatarlar.info 08.09.2016 . 14:37
                  p Сайт Омского городского совета, дата публикации 06.09.2016 Команда Молодежного общественного Совета заняла второе место на форуме «Лига дружбы»
                  p Канал "МИНСПОРТ-МЕДИА" Форум «Лига дружбы»
                  p Сайт молодежной полицейской ассоциации (МПА) Омского отделения, дата публикации 01.09.2016 МОЛОДЁЖНЫЙ ФОРУМ - ЛИГА ДРУЖБЫ
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              button.btn.btn-red.btn_scroll.mobile Проголосовать
              hr.after_btn
              Review
              .block
                h2 Организатор проекта
                h3 Омская региональная общественная организация «Казахи Омска»
                .flex.middle-xs
                  .block__image
                    img(src="/img/initiative/photo.jpg", alt="")
                  h4 Ашенова Торгын Мухамедьяровна
                a.btn.btn-blue
                  i.icon.icon-arrow
                  | Показать контактные данные
              .block
                h2 Обращение организатора
                .block__content
                  p Хочу поблагодарить всех неравнодушных людей к нашей деятельности. Если у вас есть желание присоединиться к нашей команде,мы всегда рады принять помощь волонтёров. Также у нас открыта вакансия бухгалтера в Омске. За подробностями обращайтесь по адресу...
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
              .block
                h2 Банковские реквизиты для финансовой поддержки
                .block__content
                  p Сибирский филиал ПАО <br>«Промсвязьбанк», г. Новосибирск  <br>Р/счет № 40703810604000000233 <br>Кор/счет № 30101810500000000816 <br>БИК 045004816 <br>ИНН 5504247327 <br>КПП 550401001
                a.btn.btn-blue(@click="toggleMore($event)")
                  i.icon.icon-arrow
                  span Развернуть весь текст
        .col-sm-2
          Voting
        .col-sm-10.col-sm-offset-2.pl.desctop
          .block.without-line
            h2 Поддержите голосом и отзывом другие инициативы в номинации «
              a(href="#") Наш общий дом − Россия
              | »
            Card(v-for="card in initiative" :key="card.id" :card="card")
</template>

<script>
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
  computed: {
    initiative() {
      return this.$store.getters['initiative/getInitiative']
    }
  },
  mounted() {
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
.block
  padding-bottom: 40px
  margin-bottom: 50px
  border-bottom: 1px solid grey
  @media (max-width: 767px)
    padding-bottom: 30px
    margin-bottom: 30px
    display: flex
    flex-direction: column
  &.without-line
    border: none
  &__image
    width: 120px
    height: 120px
    overflow: hidden
    border-radius: 4px
    margin-right: 50px
    margin-bottom: 40px
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
    font-size: 18px
    font-weight: 500
    line-height: 1.83
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
</style>
