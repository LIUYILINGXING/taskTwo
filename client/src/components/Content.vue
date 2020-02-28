<template>
    <div id="content">
        <CRight></CRight>
        <CLeft></CLeft>
        
    </div>
</template>

<script>
    import CLeft from '../components/CLeft.vue'
    import CRight from '../components/CRight.vue'
    

    export default{
        name:'Content',
        components:{
            CLeft,
            CRight,
            
        }
    }
</script>

<style scoped>
    #content{
        width: 980px;
        height: 1425px;
        margin: 0 auto;
        border: solid #D3D3D3;
        border-width: 1px 1px 0 1px;
        background: #fff;
    }
</style>