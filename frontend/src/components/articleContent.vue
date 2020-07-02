<template>
    <div>
        <h1 class="m-3">{{ title }}</h1>
            <div class="container">
                <p>
                    {{ articleUnique.content }}
                </p>
                <p class="details mt-4">
                    Posté par <span class="author">{{articleUnique.author_id}}</span>, le 
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
                    this.articleUnique = response.data.article
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
    text-transform: uppercase;
    font-weight: bold;
}
.details {
    text-align: right;
}

.container {
    font-size: 20px;
}

</style>