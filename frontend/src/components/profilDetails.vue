<template>
  <div class="container mt-4 profil">
        <h2>Votre profil</h2>
        <div class="card">
            <ul>
                <li>
                    test
                </li>
            </ul>

        </div>
        <button class="btn btn-danger mt-3">Supprimer mon compte</button>
  </div>
</template>

<script>
export default {
    name: 'profilDetails',
    data(){
        return {
            userId: localStorage.getItem('userID')
        }
    },
    mounted(){
        this.$http.get('http://localhost:3000/api/auth/profil')
        .then(response => {
                    console.log(response)
            })
        .catch(function (error) {
                  console.log(error)
            })          
    }
}
</script>

<style lang="sass" scoped>

</style>