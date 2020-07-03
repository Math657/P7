<template>
    <div class="container"> 
        <h2 class="my-4" v-if="allArticles.length > 0">Dernières publications de {{allArticles[0].author_name}}</h2>
        <h2 class="my-4" v-else>Aucune publication récente</h2>

        <ul>
           <li class="art_list" :key="i" v-for="(articles, i) in allArticles">
               <router-link :to="`/home/${articles.title}`">
                    <div class="text-dark m-3 px-3 pt-2">   
                        <hr class="line" >
                            <h3>{{ articles.title }}</h3>
                            <h6 class="infos_art">{{ articles.author_name}}, <span>{{moment(articles.createdAt).format("Do MMMM YYYY")}}</span></h6>
                    </div>
               </router-link>
           </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "userPosts",
    data() {
        return {
            allArticles: []
        }
    },
    mounted() {
        this.$http.get(`http://localhost:3000/api/auth/userPosts/${this.$route.params.id}`)
        .then(response => {
                for (let art of response.data.articles) {          
                    this.allArticles.push(art)   
                }
            })
            .catch((error) => {
                console.log(error)
            }) 
    }
}
</script>

<style lang="scss" scoped>

.art_list {
    list-style-type: none;
    margin-bottom: 2em;
    text-align: left;
}

</style>