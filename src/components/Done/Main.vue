<template>
    <div class="main">
        <SuccessDone />
        <FeedDriver />
        <GeoSingle />
        <InfoPayment />
        <PayDone />
        <ButtonsDone />
    </div>
</template>

<script>
import SuccessDone from '@/components/Done/Main/Success'
import FeedDriver from '@/components/Driver/Main/Feed'
import GeoSingle from '@/components/Single/Main/Geo'
import InfoPayment from '@/components/Payment/Main/Info'
import PayDone from '@/components/Done/Main/Pay'
import ButtonsDone from '@/components/Done/Main/Buttons'

export default {
    name: 'AppDriverMain',
    components: {
        SuccessDone,
        FeedDriver,
        GeoSingle,
        InfoPayment,
        PayDone,
        ButtonsDone
    }
}
</script>