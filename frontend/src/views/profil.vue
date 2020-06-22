<template>
  <div class="profil">
      <headerApp></headerApp>
      <profilDetails></profilDetails>
  </div>
</template>

<script>
import profilDetails from '@/components/profilDetails.vue'
import headerApp from '@/components/headerApp.vue'

export default {
  name: 'profil',
  components: {
    profilDetails,
    headerApp
  }
}
</script>

