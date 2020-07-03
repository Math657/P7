<template>
    <div>
        <h2 class="m-4">{{ title }}</h2>
            <div class="container">
                <p>
                    {{ articleUnique.content }}
                </p>
                <p class="details my-4">
                    Publié par <router-link :to="`/user-profil/${articleUnique.author_id}`" data-toggle="tooltip" title="Voir le profil"><span class="author">{{articleUnique.author_name}}</span></router-link>, le 
                    <span class="date">{{moment(articleUnique.createdAt).format("Do MMMM YYYY")}} à </span>
                    <span class="date">{{moment(articleUnique.createdAt).format("LT")}}h</span>
                </p>
            </div>

            <div class="card">
                <comments :artTitle="this.title"></comments>
            </div>
    </div>
</template>

<script>
import comments from './comments.vue'

export default {
    name: 'articleContent',
    data(){
        return {
            title: this.$route.params.title,
            articleUnique: []
            
        }
    },
    mounted(){
        this.$http.get(`http://localhost:3000/api/auth/home/${this.title}`)
            .then(response => {
                    this.articleUnique = response.data.article,
                    this.userId = response.data.article.author_id
            })
            .catch(function (error) {
                  console.log(error)
            })                
    },
    components: {
        comments
    }
}
</script>

<style lang="scss" scoped>

.author {
    font-weight: bold;
}
.details {
    text-align: right;
    font-size: 18px;
}

.container {
    font-size: 20px;
}

p {
    text-align: left;
}

.date {
    font-style: italic;
}

</style>