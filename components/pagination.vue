<template lang="pug">
  div.catalog__results
    paginate(
      v-if="isMount"
      v-model="page"
      :pageCount="Math.ceil(count / limit)"
      :clickHandler="clickHandler"
      :prevText="'<'"
      :nextText="'>'"
      :containerClass="'catalog__paginations'")
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isMount: false,
      page: this.$route.query.page ? +this.$route.query.page : 1
    }
  },
  mounted() {
    this.isMount = true
  },
  methods: {
    // ...mapActions('catalog', ['getCatalog', 'getInside']),

    clickHandler(page) {
      this.$emit('changePage', page)
    }
  }
}
</script>

<style lang="sass">
.catalog
  &__results
    display: flex
    align-items: center
    justify-content: center
    margin-top: 30px
  &__paginations
    display: flex
    align-items: center
    li
      width: 40px
      height: 40px
      background: #fff
      border-radius: 50%
      display: flex
      align-items: center
      justify-content: center
      font-weight: 300
      font-size: 18px
      line-height: 20px
      margin-right: 10px
      transition: all .3s
      a
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        color: #000
        transition: all .3s
      &.active
        background: #1f4fa7
        font-weight: bold
        a
          color: #fff
@media screen and (max-width: 480px)
  .catalog
    &__results
      flex-direction: column
    &__paginations
      margin-bottom: 15px
</style>
