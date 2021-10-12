<template>
    <div class="sidebar">
        <DetailsSidebar />
        <SpecificationSidebar />
        <HelpSidebar />
        <ProviderSidebar />
    </div>
</template>

<script>
import DetailsSidebar from '@/components/Home/Sidebar/Details'
import SpecificationSidebar from '@/components/Home/Sidebar/Specification'
import HelpSidebar from '@/components/Home/Sidebar/Help'
import ProviderSidebar from '@/components/Home/Sidebar/Provider'

export default {
    name: 'AppHomeSidebar',
    components: {
        DetailsSidebar,
        SpecificationSidebar,
        HelpSidebar,
        ProviderSidebar
    }
}
</script>