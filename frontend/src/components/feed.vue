<template>
    <div class="feed">
        
    </div>
</template>

<script>
export default {
    name: 'feed',
    methods: {
        getArticles() {
            axios.get('http://localhost:3000/api/auth/home')
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped lang="scss">

</style>