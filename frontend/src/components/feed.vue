<template>
    <div class="container feed mt-4">
        
        <h2  v-if="allArticles.length > 0">Articles récents</h2>
        <h2  v-else>Aucun article pour le moment!</h2>

            <button class="btn-primary mb-4" @click="$router.push('/submitArticle')">Ecrire un article</button>

        <ul>
           <li class="art_list" :key="i" v-for="(articles, i) in allArticles">
               <router-link :to="`/home/${articles.title}`">
                    <div class="card m-3">    
                            <h3>{{ articles.title }}</h3>
                            <h6 class="infos_art">{{ articles.author_id}}, <span>{{moment(articles.createdAt).format("Do MMMM YYYY")}}</span></h6>
                    </div>
               </router-link>
           </li>
        </ul>

    </div>
</template>

<script>

export default {
    name: 'feed',
    data(){
        return {
            allArticles: []
        }
    },
    created(){
        this.$http.get('http://localhost:3000/api/auth/home')
            .then(response => {
                    for (let art of response.data.articles) {          
                        this.allArticles.push(art)   
                    }
            })
            .catch((error) => {
                  console.log(error)
            })                
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.art_list {
    list-style-type: none;
}

.btn-primary {
    border-radius: 6px;
    padding: 0.5em;
    color: white;    
}


h2 {
    margin-bottom: 1em;
}

.infos_art {
    text-align: right;
    margin-right: 0.5em;
    color: black;
}

.infos_art:active {
    text-decoration: none !important;
}

a {

}

</style>