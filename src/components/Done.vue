<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <DoneSidebar />
                </div>
                <div class="col-md-8">
                    <DoneMain />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DoneSidebar from '@/components/Done/Sidebar'
import DoneMain from '@/components/Done/Main'

export default {
  name: 'AppDriverTemplate',
  components: {
    DoneSidebar,
    DoneMain
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>