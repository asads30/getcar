<template>
    <div class="sidebar-single sidebar">
        <DetailsSidebar />
        <HelpSidebar />
    </div>
</template>

<script>
import DetailsSidebar from '@/components/Home/Sidebar/Details'
import HelpSidebar from '@/components/Home/Sidebar/Help'

export default {
    name: 'AppSingleSidebar',
    components: {
        DetailsSidebar,
        HelpSidebar
    }
}
</script>