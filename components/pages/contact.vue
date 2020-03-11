<template lang="pug">
  Modal(:classes="['modal', 'v--modal']" name="contact" width="900px" height="auto" :scrollable="true" :adaptive="false" @before-close="beforeClose")
    .modal__header
      .close(@click="closeModal('contact')")
        i.icon.icon-close
        | Закрыть
      .copy(@click="copyToClickBord")
        i.icon.icon-copy
        | Скопировать ссылку
    .modal__content
      h3 Наши контакты
      p Адрес: 129090, Москва, 1-й Троицкий пер., д.12, стр.5
      p Тел.: +7(495) 514 05 51
      p E-mail:
        a(href="mailto:premia@fondkudrina.ru") premia@fondkudrina.ru
      p E-mail модератора:
        a(href="mailto:info@premiagi.ru") info@premiagi.ru
      p Сайт:
        a(href="https://www.premiagi.ru" target="_blank") www.premiagi.ru
      .share Поделиться с друзьями:
      Socials(
        :title="`Национальная премия 'Гражданская инициатива' - Контакты организационного комитета`"
      )
</template>

<script>
import Socials from '@/components/socials'

export default {
  components: {
    Socials
  }
}
</script>
