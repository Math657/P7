<template>
    <div class="container">
        <div v-if="allComments.length > 0" class="comments">
            <h4 class="my-4">Commentaires</h4>

                <ul>
                    <li class="com_list" :key="i" v-for="(comment, i) in allComments">
                        <div class="card bg-light text-dark px-3 pb-2 pt-3">    
                            <h6 class="infos_com"><router-link :to="`/user-profil/${comment.author_id}`" data-toggle="tooltip" title="Voir le profil"><span class="author">{{ comment.author_name}}</span></router-link>, 
                            <span class="date">{{moment(comment.createdAt).format("Do MMMM YYYY")}} à </span>
                            <span class="date">{{moment(comment.createdAt).format("LT")}}h</span>
                            </h6>
                            <h5>{{ comment.content }}</h5>  
                        </div>
                        <button v-if="$store.state.isAdmin === true" @click="deleteCom(comment.comment_id, i)" class="btn btn-danger mt-2">Supprimer le commentaire</button>
                        <button v-if="userId == comment.author_id && $store.state.isAdmin != true" @click="deleteCom(comment.comment_id, i)" class="btn btn-danger mt-2">Supprimer mon commentaire</button>
                    </li>
                </ul>

        </div>


        <button v-on:click="toggleForm()" class="btn btn-primary mb-4 mt-4" v-if="!revele && !published">Commenter</button>

        <div class="form-group-mb-5" v-if="revele">
            <label for="comment" class="mt-2">Votre commentaire</label>
            <textarea id="comment" class="form-control mb-4" v-model="content"></textarea>

            <button v-on:click="submitComment()" class="btn btn-primary mb-4">Publier mon commentaire</button>
        </div>

        <div class="published my-3" v-if="published">Commentaire publié!</div>
        <div class="deleted my-3" v-if="deleted && !published">Commentaire supprimé</div>

    </div>
</template>

<script>
export default {
    props: {
        artTitle: String
        },
    data(){
        return {
            comments: false,
            revele: false,
            published: false,
            deleted: false,
            content: "",
            allComments: [],
            userId: localStorage.getItem('userID')
            
        }
    },
    mounted(){
        this.$http.get(`http://localhost:3000/api/auth/comments/${this.artTitle}`)
        .then(response => {
            for (let com of response.data.comment) {          
                    this.allComments.push(com)   
                }
        })
        .catch((error) => {
            console.log(error)
        })  
    },
    methods: {
        toggleForm() {
            this.revele = true
        },
        submitComment() {
            let self = this
            if (this.content != "") {
                this.$http.post(`http://localhost:3000/api/auth/submitComment/${this.artTitle}`, {
                    content: this.content,
                    userID: this.userId
                })
                .then((res) => {
                    this.allComments.push(res.data.comment)
                    self.published = true
                    self.revele = false
                })
                .catch((error) => {
                    console.log(error)
                })
            }
            else {
                console.log('Votre commentaire ne peut pas être vide!')
            }
        },
        deleteCom(commentId, i){
            let self = this
            this.$http.delete(`http://localhost:3000/api/auth/deleteComment/${commentId}`)
            .then(() => {
                this.allComments.splice(i, 1)
                self.published = false
                self.deleted = true
            })
            .catch(function (error) {
                console.log(error)
            })  
        }
    }
}
</script>

<style lang="scss" scoped>

.com_list {
    text-align: left;
    margin-bottom: 1.5em;
}

ul {
    list-style-type: none;
}

.author {
    font-weight: bold;
    font-size: 16px;
}

.date {
    font-style: italic;
}

.card {
    border-radius: 10px;
    // border: 1px;
}

</style>