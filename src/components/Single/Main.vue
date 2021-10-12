<template>
    <div class="single">
        <FeedSingle />
        <GeoSingle />
        <AddonsSingle />
        <NextSingle />
    </div>
</template>

<script>
import FeedSingle from '@/components/Single/Main/Feed'
import GeoSingle from '@/components/Single/Main/Geo'
import AddonsSingle from '@/components/Single/Main/Addons'
import NextSingle from '@/components/Single/Main/Next'

export default {
    name: 'AppSingle',
    components: {
        FeedSingle,
        GeoSingle,
        AddonsSingle,
        NextSingle
    }
}
</script>