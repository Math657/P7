<template>
    <div class="signup">
        <h1>Veuillez renseigner vos informations</h1>
        <form>
        <label for="email">Adresse email :</label>
        <input type="email" id="email" v-model="email">

        <label for="lastname">Nom :</label>
        <input type="text" id="lastname" v-model="lastname">

        <label for="firstname">Prénom :</label>
        <input type="text" id="firstname" v-model="firstname">

        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password">
        <button v-on:click="signup()" id="btn_submit">S'inscrire</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'signupPage',
    data() {
        return {
            email: "",
            lastname: "",
            firstname: "",
            password: ""
        } 
    },
    methods: {
        signup() {
            axios.post('http://localhost:3000/api/auth/signup', {
                email: this.email,
                lastname: this.lastname,
                firstname: this.firstname,
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