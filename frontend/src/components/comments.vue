<template>
    <div class="container">
        <div v-if="allComments.length > 0" class="comments">
            <h4 class="mt-5 mb-4">Tous les commentaires</h4>

                <ul>
                    <li class="com_list" :key="i" v-for="(comment, i) in allComments">
                        <div>    
                            <h6 class="infos_com">{{ comment.author_id}}, {{comment.createdAt}}</h6>
                            <h5>{{ comment.content }}</h5>  
                        </div>
                    </li>
                </ul>

        </div>

        <h4 class="mt-5 mb-4" v-else>Aucun commentaire pour le moment</h4>

        <button v-on:click="toggleForm()" class="btn btn-primary mb-5" v-if="!revele">Ecrire un commentaire</button>

        <div class="form-group-mb-5" v-if="revele">
            <label for="comment">Votre commentaire</label>
            <textarea id="comment" class="form-control mb-5" v-model="content"></textarea>

            <button v-on:click="submitComment()" class="btn btn-primary mb-4">Publier mon commentaire</button>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            comments: false,
            revele: false,
            content: "",
            allComments: []
        }
    },
    created(){
        this.$http.get('http://localhost:3000/api/auth/comments')
        .then(response => {
            console.log(response.data.comment)
            for (let com of response.data.comment) {          
                        this.allComments.push(com)   
                    }
        })
        .catch(function (error) {
            console.log(error)
        })  
    },
    methods: {
        toggleForm() {
            this.revele = true
        },
        submitComment() {
            // if (this.content != "") {
            //     this.$http.post('http://localhost:3000/api/auth/submitcomments')
            // }
            // else {
            //     console.log('Votre commentaire ne peut pas être vide!')
            // }
        }
    }
}
</script>

<style lang="scss" scoped>

ul {
    list-style-type: none;
}


</style>