<template>
    <div class="userProfil">
        <headerApp></headerApp>
        <userPosts></userPosts>
    </div>
</template>

<script>
import headerApp from '@/components/headerApp'
import userPosts from '@/components/userPosts'

export default {
    name: 'userProfil',
    components: {
        headerApp,
        userPosts
    }
}
</script>

<style lang="scss" scoped>

</style>