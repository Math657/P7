<template>
    <div class="bloc-modale" v-if="revele">

        <div v-on:click="toggleModale" class="overlay"></div>

            <div class="modale card">
                <h3 class="mb-4">Voulez-vous vraiment supprimer votre compte ?</h3>
                    <div class="both-btn">
                        <div v-on:click="deleteProfil()" class="btn-oui btn btn-danger">Oui</div>
                        <div v-on:click="toggleModale" class="btn-retour btn btn-primary">Retour</div>
                    </div>
            </div>
    </div>

</template>

<script>

export default {
    name:'modaleDelete',
    props: ['revele', 'toggleModale'],
    data(){
        return {
            userId: localStorage.getItem('userID')
        }
    },
    methods: {
        deleteProfil(){
            this.$http.delete(`http://localhost:3000/api/auth/profil/${this.userId}`)
            .then(() => {
                localStorage.clear()
                sessionStorage.clear()
                this.$store.dispatch('logOut')
                this.$router.push('/')
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}

</script>

<style lang="scss" scoped>

.bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale {
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
    bottom: 40%;
}

.btn {
    width: 6em;
}

.both-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

</style>