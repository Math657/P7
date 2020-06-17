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
export default {
    name: 'signupPage',
    data() {
        const formData = {
            email: "",
            lastname: "",
            firstname: "",
            password: ""
        }
        return formData   
    },
    methods: {
        signup() {
            var request = new XMLHttpRequest()
            request.onreadystatechange = () => {
                if (request.readyState == XMLHttpRequest.DONE && request.status == 201) {
                     const response = JSON.parse(this.responseText)
                     console.log(response)
                     //this.$router.push("/home")
                }
            }
            request.open("POST", "http://localhost:3000/api/signup")
            request.setRequestHeader("Content-Type", "application/json")
            request.send(this.formData)
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