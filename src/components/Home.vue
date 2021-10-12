<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <HomeSidebar />
                </div>
                <div class="col-md-8">
                    <HomeMain />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeSidebar from '@/components/Home/Sidebar'
import HomeMain from '@/components/Home/Main'

export default {
  name: 'AppHomeTemplate',
  components: {
    HomeSidebar,
    HomeMain
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>