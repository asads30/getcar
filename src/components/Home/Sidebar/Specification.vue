<template>
    <div class="specification">
        <SpecificationAuto />
        <SpecificationDeposit />
    </div>
</template>

<script>
import SpecificationAuto from '@/components/Home/Sidebar/Specification/Auto'
import SpecificationDeposit from '@/components/Home/Sidebar/Specification/Deposit'

export default {
    name: 'AppHomeSidebarSpecification',
    components: {
        SpecificationAuto,
        SpecificationDeposit
    }
}
</script>

<style scoped>
    .specification{
        background: #F2F2F2;
        box-shadow: 0px 2px 40px rgba(114, 114, 114, 0.08);
        border-radius: 16px;
        padding: 20px 20px 30px;
        margin-bottom: 20px;
    }
    @media(max-width:767px){
        .provider{
            display: none;
        }
    }
</style>