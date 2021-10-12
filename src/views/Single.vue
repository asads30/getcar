<template>
    <div class="single">
        <Single />
    </div>
</template>

<script>
import Single from '@/components/Single'

export default {
    name: 'SingleApp',
    components: {
        Single
    },
    mounted(){
        window.scrollTo(0, 0)
    }
}
</script>