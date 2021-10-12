<template>
    <div class="main">
        <FeedDriver />
        <PriceDriver />
        <InfoDriver />
        <EconomDriver />
        <NextDriver />
    </div>
</template>

<script>
import FeedDriver from '@/components/Driver/Main/Feed'
import PriceDriver from '@/components/Driver/Main/Price'
import InfoDriver from '@/components/Driver/Main/Info'
import EconomDriver from '@/components/Driver/Main/Econom'
import NextDriver from '@/components/Driver/Main/Next'

export default {
    name: 'AppDriverMain',
    components: {
        FeedDriver,
        PriceDriver,
        InfoDriver,
        EconomDriver,
        NextDriver
    }
}
</script>