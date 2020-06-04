<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <form>
        <label for="email">Adresse email :</label>
        <input type="email" id="email">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" >
        <button v-on:click="login()" id="btn_submit">{{ connect }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  props: {
    msg: String,
    connect: String
  },
  methods: {
    login() {
      alert('connecté!')
    },
    signup() {
      alert('création OK!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

form {
    display: flex;
    flex-direction: column;
}

form input {
    max-width: 10em;
    align-self: center;
}

form label {
    margin: 1em;
}

#btn_submit {
    margin-top: 3em;
    width: 10em;
    min-height: 2em;
    align-self: center;
}
</style>
