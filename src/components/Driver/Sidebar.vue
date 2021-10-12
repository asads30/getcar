<template>
    <div class="sidebar">
        <ProviderSidebar />
        <HelpSidebar />
    </div>
</template>

<script>
import ProviderSidebar from '@/components/Driver/Sidebar/Provider'
import HelpSidebar from '@/components/Home/Sidebar/Help'

export default {
    name: 'AppDriverSidebar',
    components: {
        HelpSidebar,
        ProviderSidebar
    }
}
</script>