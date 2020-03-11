<template lang="pug">
  div
    Intro
    Events
    Contest
    Step
    Review
    //- Project
    Partners
</template>

<script>
import Intro from '~/components/home/intro'
import Events from '~/components/home/events'
import Review from '~/components/home/review'
import Contest from '~/components/home/contest'
import Step from '~/components/home/step'
import Project from '~/components/home/project'
import Partners from '~/components/home/partners'
export default {
  components: {
    Intro,
    Events,
    Review,
    Contest,
    Step,
    Project,
    Partners
  }
  // async asyncData({ params, $axios }) {
  //   const { data } = await $axios.get('https://old.premiagi.ru/api/news')
  //   return { events: data }
  // },
}
</script>
