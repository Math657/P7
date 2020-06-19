<template>
  <div id="app">
    
    <div id="nav">
      <!-- <img alt="Groupomana logo" src="../assets/icon-above-font.png"> -->
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

// img {
//   position: absolute;
//   top: 0;
//   left: 0;
//   max-width: 10%;
// }

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