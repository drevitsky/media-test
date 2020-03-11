<template lang="pug">
  Modal(:classes="['modal', 'v--modal']" name="contacts_info" width="900px" height="auto" :scrollable="true" :adaptive="false" @before-close="beforeClose")
    .modal__header
      .close(@click="closeModal('contacts_info')")
        i.icon.icon-close
        | Закрыть
    .modal__content(v-if="activeItem")
      h3 Контактная информация
      p Адрес: {{ activeItem.contactAddress }}
      p Тел.: {{ activeItem.contactPhone }}
      p E-mail:
        a(:href="`mailto:${activeItem.contactEmail}`") {{ activeItem.contactEmail }}
      p ФИО: {{ activeItem.contactUser }}
      p Должность: {{ activeItem.contactPosition }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('reestr', ['activeItem'])
  }
}
</script>
