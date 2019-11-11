<template>
    <section class="denav-top">
        <div>
            <dd-detail-nav-item v-for="(nav,i) in data" :key="i" :data="nav"></dd-detail-nav-item>
        </div>
    </section>
</template>

<script>
    import navitem from "./nav/navitem";
    export default {
        name: 'vnav',
        props:["data"],
        components:{
            "dd-detail-nav-item":navitem
        }
    }
</script>


<style scoped>
    div{
        display: flex;
        width:7rem;
    }
</style>