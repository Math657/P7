<template>
  <div class="container mt-4 profil">
        <h2 class="mb-4">Votre profil</h2>
        <div class="card mb-3">
            <ul>
                <li><span class="label">Nom :</span> {{ userInfos[0].lastname }}</li>
                <li><span class="label">Prénom :</span> {{ userInfos[0].firstname}}</li>
                <li><span class="label">Email :</span> {{ userInfos[0].email }}</li>

            </ul>

        </div>
        <button v-on:click="toggleModale" class="btn btn-danger mt-3">Supprimer mon compte</button>

        <modaleDelete :revele="revele" :toggleModale="toggleModale"></modaleDelete>

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
            revele: false
        }
    },
    mounted(){
        this.$http.get(`http://localhost:3000/api/auth/profil/${this.userId}`)
        .then(response => {
                    this.userInfos.push(response.data.user)
                    console.log(response.data.user)
            })
        .catch(function (error) {
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

li {
    padding: 8px;
}

.card {
    font-size: 20px;
    text-align: left;
}

</style>