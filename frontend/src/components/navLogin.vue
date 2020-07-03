<template>
  <div id="app">
    
    <div id="nav">
      <router-link class="mr-3" to="/">Connexion</router-link>
      <router-link to="/signup">Créer un compte</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'navLogin'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: 1.2em;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0069D9;
    }
  }
}

#connect {
    margin-right: 10px;
}
</style>