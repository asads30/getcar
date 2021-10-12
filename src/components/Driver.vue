<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <DriverSidebar />
                </div>
                <div class="col-md-8">
                    <DriverMain />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DriverSidebar from '@/components/Driver/Sidebar'
import DriverMain from '@/components/Driver/Main'

export default {
  name: 'AppDriverTemplate',
  components: {
    DriverSidebar,
    DriverMain
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>