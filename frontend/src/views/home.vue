<template>
  <div class="home">
   Voici le fil d'actualité
   <feed/>
  </div>
</template>

<script>
import feed from '@/components/feed.vue'

export default {
  name: 'home',
  components: {
    feed
  }
}
</script>

