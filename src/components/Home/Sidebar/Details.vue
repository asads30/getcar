<template>
    <div class="sidebar">
        <SearchSidebar />
        <SearchReturn />
        <SearchReceiving />
    </div>
</template>

<script>
import SearchSidebar from '@/components/Home/Sidebar/Details/Search'
import SearchReturn from '@/components/Home/Sidebar/Details/Return'
import SearchReceiving from '@/components/Home/Sidebar/Details/Receiving'

export default {
    name: 'AppHomeSidebarDetails',
    components: {
        SearchSidebar,
        SearchReturn,
        SearchReceiving
    }
}
</script>

<style scoped>
    .sidebar{
        background: linear-gradient(96.89deg, #2D9CDB 0%, #0152B4 97.72%);
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.08);
        border-radius: 16px;
        padding: 20px;
        margin-bottom: 20px;
    }
    
</style>