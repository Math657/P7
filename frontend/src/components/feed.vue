<!--<template>
    <div class="feed">
        <ul>
            <!-- <li v-for="articles in response">
                {{ articles }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'feed',
    data(){
        return {
            articles: []
        }
    },
    methods: {
         
            
        
    },
    mounted(){
        axios.get('http://localhost:3000/api/auth/home')
            .then(response => {
                this.articles = articles.data[0]
            })
            .catch()                
    }
}
</script>

<style scoped lang="scss">

</style>