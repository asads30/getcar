<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <DriverSidebar />
                </div>
                <div class="col-md-8">
                    <PaymentMain />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DriverSidebar from '@/components/Driver/Sidebar'
import PaymentMain from '@/components/Payment/Main'

export default {
  name: 'AppPaymentTemplate',
  components: {
    DriverSidebar,
    PaymentMain
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>