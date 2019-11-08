<template>
        <!--书-->
        <section class="book">
            <dd-index-content-shop :data="data" v-for="(conent, i) in data.conents" :key="i" :conent="conent" :i="i"></dd-index-content-shop>
        </section>
</template>

<script>
    import item from "./cont/item"
    export default {
        name: 'scontent',
        components:{
            "dd-index-content-shop":item
        },
        props:["data","i"]
    }
</script>


<style scoped>

</style>