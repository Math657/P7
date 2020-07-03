<template>
    <div class="header p-3">   
        <router-link class="home" to="/home"><button class="btn btn-info">Accueil</button></router-link>    
        <img alt="Groupomana logo" src="../assets/icon-white-cropped.png" class="home">
        <div class="btns-right">
            <router-link to="/profil">
                <button class="btn btn-info">
                    Mon profil
                </button>
            </router-link>
    
            <button class="btn btn-danger ml-3" @click.prevent="logOut()">
                Se déconnecter
            </button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'headerApp',
    methods: {
        logOut(){
            localStorage.clear()
            sessionStorage.clear()
            this.$store.dispatch('logOut')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped lang="scss">

.header {
    height: 10%; 
    background-color: rgb(58, 77, 90);
    display: flex;
}

.home {
    margin-right: auto;
}

img {
    height: 10%;
    width: 13em;
    margin-top: 2px;
}

@media only screen and (max-width: 640px) {
  img {
    display: none;
  }
}

</style>