<template>
    
    <div class="container">
        <h2 class="my-4">Soumettez votre article</h2>

        <div class="form-group-mb-5">
            <label for="title">Titre</label>
            <input type="text" id="title" class="form-control" v-model="titre">
        </div>
        <div class="form-group-mb-5">
            <label class="mt-4" for="content">Contenu</label>
            <textarea id="content" class="form-control" v-model="content"></textarea>
        </div>
        <button @click.prevent="submit()" class="btn btn-primary mt-4">Soumettre</button>
    </div>
</template>

<script>
export default {
    name: 'submitForm',
    data(){
        return {
            titre: "",
            content: "",
            userId: localStorage.getItem('userID')
        }
    },
    methods: {
        submit(){
            this.$http.post('')
            

            
        }
    }
    
}
</script>

<style lang="sass" scoped>

</style>