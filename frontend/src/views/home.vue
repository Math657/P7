<template>
  <div>
      <headerApp></headerApp>
      <feed></feed>
  </div>
</template>

<script>
import feed from '@/components/feed.vue'
import headerApp from '@/components/headerApp.vue'

export default {
  name: 'home',
  components: {
    feed,
    headerApp
  }
}
</script>

