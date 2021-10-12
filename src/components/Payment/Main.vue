<template>
    <div class="main">
        <FeedDriver />
        <InfoPayment />
        <PricePayment />
        <PayPayment />
        <NextPayment />
    </div>
</template>

<script>
import FeedDriver from '@/components/Driver/Main/Feed'
import InfoPayment from '@/components/Payment/Main/Info'
import PricePayment from '@/components/Payment/Main/Price'
import PayPayment from '@/components/Payment/Main/Pay'
import NextPayment from '@/components/Payment/Main/Next'

export default {
    name: 'AppPaymentMain',
    components: {
        FeedDriver,
        InfoPayment,
        PricePayment,
        PayPayment,
        NextPayment
    }
}
</script>