<template>
    <div class="container mt-5">
        <navLogin></navLogin>
        <h1>Veuillez renseigner vos informations</h1>

        <form class="form-group mt-4">
            
            <label for="email">Adresse email :</label>
            <input type="email" id="email" name="email" v-model="email" class="form-control" required>

            <label for="lastname">Nom :</label>
            <input type="text" id="lastname" name="lastname" v-model="lastname" class="form-control" required>

            <label for="firstname">Prénom :</label>
            <input type="text" id="firstname" name="firstname" v-model="firstname" class="form-control" required>

            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" v-model="password" class="form-control" required>

            <button class="btn btn-primary mt-3" @click.prevent="checkForm(); signup()" id="btn_submit">S'inscrire</button>

         </form>
         <img alt="Groupomana logo" src="../assets/icon-above-font.png">
    </div>
</template>

<script>
import axios from 'axios'
import navLogin from '../components/navLogin'

export default {
    name: 'signup',
    data() {
        return {
            email: null,
            lastname: null,
            firstname: null,
            password: null
        } 
    },
    methods: {
        checkForm: function (e) {
        if (this.email && this.lastname && this.firstname && this.password) {
            return true
        }
        if (!this.validEmail(this.email)) {
            console.log('Entrez un email valide!')
            return false
        }
        if (!this.lastname) {
            console.log('Nom requis!')
            return false
        }
        if (!this.firstname) {
            console.log('Prénom requis!')
            return false
        }
        if (!this.password) {
            console.log('Mot de passe requis!')
            return false
        }
        e.preventDefault()   
        },
        validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
        signup() {  
            if (this.checkForm()) {
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
            })}
        }
    },
    components: {
    navLogin
  },
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
