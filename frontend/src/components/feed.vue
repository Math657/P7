<template>
    <div class="container feed mt-4">
        
        <h2  v-if="allArticles.length > 0">Voici le fil d'actualité!</h2>
        <h2  v-else>Aucun article pour le moment!</h2>

            <button class="btn-primary mb-4" @click="$router.push('/submitArticle')">Ecrire un article</button>

        <ul>
           <li class="art_list" :key="i" v-for="(articles, i) in allArticles">
               <router-link :to="`/home/${articles.title}`">
                    <div class="card m-3">    
                            <h3>{{ articles.title }}</h3>
                            <h6 class="infos_art">{{ articles.author}}, {{articles.createdAt}}</h6>
                    </div>
               </router-link>
           </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'feed',
    data(){
        return {
            allArticles: []
        }
    },
    created(){
        axios.get('http://localhost:3000/api/auth/home')
            .then(response => {
                    for (let art of response.data.articles) {          
                        this.allArticles.push(art) 
                        console.log(this.allArticles)   
                    }
            })
            .catch(function (error) {
                  console.log(error)
                 })                
    },
}
</script>

<style scoped lang="scss">
.art_list {
    list-style-type: none;
}

.card {
    
}

h2 {
    margin-bottom: 1em;
}

.infos_art {
    text-align: right;
    margin-right: 0.5em;
}
</style>