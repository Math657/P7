<template>
  <div class="container mt-4 profil">
        <h2 class="mb-4">Votre profil</h2>
        <div class="card mb-3">
            <ul>
                <li class="profil_infos"><span class="label">Nom :</span> {{ userInfos[0].lastname }}</li>
                <li class="profil_infos"><span class="label">Prénom :</span> {{ userInfos[0].firstname}}</li>
                <li class="profil_infos"><span class="label">Email :</span> {{ userInfos[0].email }}</li>

            </ul>

        </div>
        <button v-on:click="toggleModale" class="btn btn-danger mt-3">Supprimer mon compte</button>

        <modaleDelete :revele="revele" :toggleModale="toggleModale"></modaleDelete>

        <h3 class="mb-4 mt-5" v-if="allArticles.length > 0">Vos dernières publications</h3>
        <h3 class="mt-5" v-else>Aucune publication récente</h3>

        <ul>
           <li class="art_list" :key="i" v-for="(articles, i) in allArticles">
               <router-link :to="`/home/${articles.title}`">
                    <div class="text-dark m-3 px-3 pt-2">  
                        <hr class="line">  
                            <h3>{{ articles.title }}</h3>
                            <h6 class="infos_art">{{ articles.author_name}}, <span>{{moment(articles.createdAt).format("Do MMMM YYYY")}}</span></h6>
                    </div>
               </router-link>
           </li>
        </ul>

  </div>
</template>

<script>
import modaleDelete from '../components/modaleDelete'

export default {
    name: 'profilDetails',
    data(){
        return {
            userId: localStorage.getItem('userID'),
            userInfos: [],
            revele: false,
            allArticles: []
        }
    },
    mounted(){
        this.$http.get(`http://localhost:3000/api/auth/profil/${this.userId}`)
        .then(response => {
                    this.userInfos.push(response.data.user)
            })
        .catch(function (error) {
                  console.log(error)
            }) 
            
        this.$http.get(`http://localhost:3000/api/auth/userPosts/${this.userId}`)
        .then(response2 => {
                for (let art of response2.data.articles) {          
                    this.allArticles.push(art)   
                }
            })
            .catch((error) => {
                console.log(error)
            })     
    },
    methods: {
        toggleModale: function() {
            this.revele = !this.revele
        }
    },
    components: {
        modaleDelete
    }
}
</script>

<style lang="scss" scoped>

.label {
    font-weight: bold;
}

ul {
    list-style-type: none;
    margin-top: 8px;
}

.profil_infos {
    padding: 8px;
}

.card {
    font-size: 20px;
    text-align: left;
    border-radius: 7px
}

.art_list {
    margin-bottom: 2em;
    text-align: left;
}

</style>