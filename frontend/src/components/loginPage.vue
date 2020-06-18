<template>
  <div class="login">
    <h1>{{ msg }}</h1>
     <form>
        <label for="email">Adresse email :</label>
        <input type="email" id="email" v-model="email">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password">
        <button v-on:click="login()" id="btn_submit">{{ connect }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'loginPage',
  props: {
    msg: String,
    connect: String
  },
  data() {
    return {
      email: "",
      password: ""
    }   
  },
  methods: {
    login() {
      axios.post('http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password
      })
      .then(function (response) {
          console.log(response)
      })
      .catch(function (error) {
          console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

form {
    display: flex;
    flex-direction: column;
}

form input {
    max-width: 15em;
    align-self: center;
    margin-bottom: 1em;
    
}

form label {
    margin: 0.5em;
}

#btn_submit {
    margin-top: 2em;
    width: 10em;
    min-height: 2em;
    align-self: center;
}
</style>
