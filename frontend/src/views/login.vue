<template>
  <div class="login">
    <loginPage msg="Connectez-vous" connect="Se connecter"/>
  </div>
</template>

<script>
// @ is an alias to /src
import loginPage from '@/components/loginPage.vue'

export default {
  name: 'login',
  components: {
    loginPage
  }
}
</script>