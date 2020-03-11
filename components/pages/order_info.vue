<template lang="pug">
  Modal(:classes="['modal', 'v--modal']" name="order_info" width="900px" height="auto" :scrollable="true" :adaptive="false" @before-close="beforeClose")
    .modal__header
      .close(@click="closeModal('order_info')")
        i.icon.icon-close
        | Закрыть
      .copy(@click="copyToClickBord")
        i.icon.icon-copy
        | Скопировать ссылку
    .modal__content
      h3 Заявка на участие в конкурсе
      p Приём заявок на участие в VIII конкурсе «Гражданская Инициатива» открыт с 20 января 2020 года до 1 ноября 2020 года.
      p Перед вами ссылки на скачивание двух документов в формате Microsoft Word − образец заполненной заявки и шаблон для подачи завки на участие в конкурсе вашей инициативы. Заполните документ и отправьте по адресу <a href="mailto:info@premiagi.ru" target="_blank">info@premiagi.ru</a>. Модератор проверит заявку, при необходимости поможет с заполнением и ответит на ваши вопросы. После активации заявки модератор предоставит вам доступ к редактированию информации на странице вашей инициативы.
      .files
        a(href="/img/files/example_init.doc" download)
          img(src="/img/files/doc.png")
          span Скачать образец заполненной заявки .doc
        a(href="/img/files/template_init.doc" download)
          img(src="/img/files/doc.png")
          span Скачать шаблон заявки на конкурс .doc
      a.btn.btn-red(href="mailto:info@premiagi.ru?subject=Новая заявка на конкурс") Отправить заявку
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.modal__content
  .files
    margin: 30px 0 60px
    display: flex
    flex-direction: column
    a
      display: flex
      align-items: center
      margin-bottom: 37px
      font-weight: 500
      text-decoration: none
      img
        margin-right: 28px
      &:last-child
        margin-bottom: 0
</style>
