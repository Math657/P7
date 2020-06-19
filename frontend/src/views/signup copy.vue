<template>
    <div class="container mt-5">
        <navLogin></navLogin>
        <h1>Veuillez renseigner vos informations</h1>

        <form class="form-group mt-4">
            
            <label for="email">Adresse email :</label>
            <input type="email" id="email" v-model="email" class="form-control" required>

            <label for="lastname">Nom :</label>
            <input type="text" id="lastname" v-model="lastname" class="form-control" required>

            <label for="firstname">Prénom :</label>
            <input type="text" id="firstname" v-model="firstname" class="form-control" required>

            <label for="password">Mot de passe :</label>
            <input type="password" id="password" v-model="password" class="form-control" required>

            <button class="btn btn-primary mt-3" v-on:click.prevent="signup()" id="btn_submit">S'inscrire</button>

         </form>
    </div>
</template>

<script>
import axios from 'axios'
import navLogin from '../components/navLogin'

export default {
    name: 'signup',
    data() {
        return {
            email: "",
            lastname: "",
            firstname: "",
            password: ""
        } 
    },
    methods: {
        checkForm(){
            
        },
        signup() {
            axios.post('http://localhost:3000/api/auth/signup', {
                email: this.email,
                lastname: this.lastname,
                firstname: this.firstname,
                password: this.password
            })
            .then(function (response) {
                console.log(response)
                this.$router.push('/home')
            })
            .catch(function (error) {
                console.log(error)
            })
        }
    },
    components: {
    navLogin
  }
}
</script>

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
