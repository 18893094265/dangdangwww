<template>
        <!--书-->
        <section class="book">
            <dd-index-content-shop :data="data" v-for="(conent, i) in data.conents" :key="i" :conent="conent"></dd-index-content-shop>
        </section>
</template>

<script>
    import item from "./cont/item"
    export default {
        name: 'contents',
        components:{
            "dd-index-content-shop":item
        },
        props:["data"]
    }
</script>


<style scoped>

</style>