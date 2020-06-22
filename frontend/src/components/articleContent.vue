<template>
    <div>
        <h1 class="m-3">{{ title }}</h1>
            <div class="container">
                <p>
                    {{ articleUnique.content }}
                </p>
                <p class="details mt-4">
                    Posté par <span class="author">{{articleUnique.author}}</span> le <span class="date">{{articleUnique.createdAt}}</span>
                </p>
            </div>
    </div>
</template>

<script>
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

</style>