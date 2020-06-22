<template>
  <div class="articleUnique">
      <headerApp></headerApp>
      <articleContent></articleContent>
  </div>
</template>

<script>
import articleContent from '@/components/articleContent.vue'
import headerApp from '@/components/headerApp.vue'

export default {
  name: 'articleUnique',
  components: {
    articleContent,
    headerApp
  }
}
</script>

<style lang="sass" scoped>

</style>

