<template>
  <div class="submitArticle">
      <headerApp></headerApp>
      <submitForm></submitForm>
  </div>
</template>

<script>
import submitForm from '@/components/submitForm.vue'
import headerApp from '@/components/headerApp.vue'

export default {
  name: 'submitArticle',
  components: {
    submitForm,
    headerApp
  }
}
</script>

<style lang="sass" scoped>

</style>
