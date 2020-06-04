<template>
  <div class="signup">
    <loginPage msg="Créez un compte" connect="S'inscrire"/>
  </div>
</template>

<script>

import loginPage from '@/components/loginPage.vue'

export default {
  name: 'signup',
  components: {
    loginPage
  }
}
</script>