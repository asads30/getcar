<template>
    <div class="main">
        <TopbarMain />
        <PopularMain />
        <SortMain />
        <FeedMain />
    </div>
</template>

<script>
import TopbarMain from '@/components/Home/Main/Topbar'
import PopularMain from '@/components/Home/Main/Popular'
import SortMain from '@/components/Home/Main/Sort'
import FeedMain from '@/components/Home/Main/Feed'

export default {
    name: 'AppHomeMain',
    components: {
        TopbarMain,
        PopularMain,
        SortMain,
        FeedMain
    },
}
</script>