<template lang="pug">
  Modal(:classes="['modal', 'v--modal']" name="appeal" width="900px" height="auto" :scrollable="true" @before-close="beforeClose")
    .modal__header
      .close(@click="closeModal('appeal')")
        i.icon.icon-close
        | Закрыть
      .copy(@click="copyToClickBord")
        i.icon.icon-copy
        | Скопировать ссылку
    .modal__content
      <iframe width="100%" src="https://www.youtube.com/embed/ww70RK3e7tc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      .share Поделиться с друзьями:
      Socials(
        :title="`Обращение Алексея Кудрина`"
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

<style lang="sass" scoped>
.modal__content
  iframe
    height: 370px
    @media (max-width: 480px)
      height: 200px
</style>
