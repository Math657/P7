<template>
    
    <div v-if="!published" class="container">
        <h2 class="my-4">Soumettez votre article</h2>

        <div class="form-group-mb-5">
            <label for="title">Titre</label>
            <input type="text" id="title" class="form-control" v-model="title">
        </div>
        <div class="form-group-mb-5">
            <label class="mt-4" for="content">Contenu</label>
            <textarea id="content" class="form-control" v-model="content"></textarea>
        </div>
        <button @click.prevent="submit()" class="btn btn-primary mt-4">Soumettre</button>
    </div>
    <div v-else class="container">
        <h2 class="my-4">Article publié !</h2>
        <router-link class="home" to="/home"><button class="btn btn-primary">Retourner à l'accueil</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'submitForm',
    data(){
        return {
            title: "",
            content: "",
            userId: localStorage.getItem('userID'),
            published: false

        }
    },
    methods: {
        submit(){
            let self = this
            if (this.title != "" && this.content !="") {
                this.$http.post(`http://localhost:3000/api/auth/submitArticle/${this.userId}`, {
                title: this.title,
                content: this.content
                })
                .then(function () {
                    self.published = true;
                })
                .catch(function (error) {
                    console.log(error)
                 })
            }
            else {
                console.log('Vous devez entrer un titre et un contenu!')
            }
            
        }
    }
    
}
</script>

<style lang="sass" scoped>

</style>