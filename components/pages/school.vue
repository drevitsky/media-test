<template lang="pug">
  Modal(:classes="['modal', 'v--modal']" name="school" width="900px" height="380px" :adaptive="false" @before-close="beforeClose")
    .modal__header
      .close(@click="closeModal('school')")
        i.icon.icon-close
        | Закрыть
    .modal__content
      p Данный раздел временно недоступен. В ближайшие дни он будет открыт в новом оформлении и с расширенным функционалом.
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.modal
  &__header
    margin-bottom: 0
    .close
      margin: 0
      position: absolute
      right: 21px
      top: 18px
      font-size: 14px
      .icon
        font-size: 14px
  &__content
    height: 100%
    display: flex
    align-items: center
    justify-content: center
p
  line-height: 30px
  text-align: center
  margin: 0
</style>
