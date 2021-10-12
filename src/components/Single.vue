<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <SingleSidebar />
                </div>
                <div class="col-md-8">
                    <SingleMain />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleSidebar from '@/components/Single/Sidebar'
import SingleMain from '@/components/Single/Main'

export default {
  name: 'AppSingleTemplate',
  components: {
    SingleSidebar,
    SingleMain
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>