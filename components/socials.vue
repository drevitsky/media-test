<template>
  <social-sharing
    :title="title"
    :description="description"
    inline-template
    class="social-sharing"
  >
    <div>
      <network network="facebook">
        <i class="fab fa-facebook" title="Facebook" />
      </network>
      <network network="twitter">
        <i class="fab fa-twitter" title="Twitter" />
      </network>
      <network network="skype">
        <i class="fab fa-skype" title="Skype" />
      </network>
      <network network="whatsapp">
        <i class="fab fa-whatsapp" title="Whatsapp" />
      </network>
      <network network="vk">
        <i class="fab fa-vk" title="Vkontakte" />
      </network>
      <network network="odnoklassniki">
        <i class="fab fa-odnoklassniki" title="Odnoklassniki" />
      </network>
      <network network="telegram">
        <i class="fab fa-telegram" title="Telegram" />
      </network>
    </div>
  </social-sharing>
</template>

<script>
export default {
  props: {
    // url: {
    //   type: String,
    //   default: window.location.href
    // },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
.social-sharing
  margin-top: 10px
  color: #606c71
  font-size: 20px
  display: flex
  align-items: center
  span
    margin: 0 5px
    cursor: pointer
    &:first-child
      margin-left: 0
    &:last-child
      margin-right: 0
</style>
