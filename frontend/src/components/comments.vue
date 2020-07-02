<template>
    <div class="container">
        <div v-if="allComments.length > 0" class="comments">
            <h4 class="my-4">Commentaires</h4>

                <ul>
                    <li class="com_list" :key="i" v-for="(comment, i) in allComments">
                        <div>    
                            <h6 class="infos_com"><span class="author">{{ comment.author_id}}</span>, <span class="date">{{moment(comment.createdAt).format("Do MMMM YYYY")}} à </span>
                            <span class="date">{{moment(comment.createdAt).format("LT")}}h</span>
                            </h6>
                            <h5>{{ comment.content }}</h5>  
                        </div>
                    </li>
                </ul>

        </div>


        <button v-on:click="toggleForm()" class="btn btn-primary my-4" v-if="!revele && !published">Ecrire un commentaire</button>

        <div class="form-group-mb-5" v-if="revele">
            <label for="comment">Votre commentaire</label>
            <textarea id="comment" class="form-control mb-5" v-model="content"></textarea>

            <button v-on:click="submitComment()" class="btn btn-primary mb-4">Publier mon commentaire</button>
        </div>

        <div class="published my-3" v-if="published">Commentaire publié!</div>

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
            content: "",
            allComments: [],
            userId: localStorage.getItem('userID'),
            published: false
        }
    },
    mounted(){
        this.$http.get(`http://localhost:3000/api/auth/comments/${this.artTitle}`)
        .then(response => {
            console.log(response.data.comment)
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
}

</style>