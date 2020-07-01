<template>
    <div class="container mt-5">
        <navLogin></navLogin>
        <h1>Connectez-vous</h1>

        <form>

            <label for="email">Adresse email :</label>
            <input type="email" id="email" v-model="email" class="form-control" required>

            <label for="password">Mot de passe :</label>
            <input type="password" id="password" v-model="password" class="form-control" required>

            <button class="btn btn-primary my-3" v-on:click.prevent="login()" id="btn_submit">Connexion</button>

        </form>
        <img alt="Groupomana logo" src="../assets/icon-above-font.png">
  </div>
</template>

<script>
import navLogin from '../components/navLogin'

export default {
    name: 'login',
    data() {
        return {
            email: "",
            password: ""
        }   
    },
    methods: {
        login() {
            if (this.email != "" && this.password !="") {
                let self = this
                this.$http.post('http://localhost:3000/api/auth/login', {
                email: this.email,
                password: this.password
                })
                .then(function (response) {
                    localStorage.setItem('userID', JSON.stringify(response.data.userId))
                    // localStorage.setItem('jwt', JSON.stringify(response.data.token))
                    console.log(response)
                    self.$router.push('/home')
                })
                .catch(function (error) {
                    console.log(error)
                 })
            }
            else {
                console.log('Vous devez entrer un nom d\'utilisateur et/ou mot de passe correct!')
            }
        }
           
    },
    components: {
        navLogin
    }
}
</script>

<style scoped lang="scss">
img {
  max-width: 30%;
}

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
