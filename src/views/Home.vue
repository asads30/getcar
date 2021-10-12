<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home'

export default {
  name: 'AppHome',
  components: {
    Home
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>