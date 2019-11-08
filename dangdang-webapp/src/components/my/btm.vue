<template>
    <section class="box">
        <dd-my-btm-btmitem :data="bt" v-for="(bt,z) in data" :key="z"></dd-my-btm-btmitem>
    </section>
</template>

<script>
    import btmitem from "./btm/btmitem";
    export default {
        name: 'btm',
        props:["data"],
        components:{
            "dd-my-btm-btmitem":btmitem
        }
    }
</script>


<style scoped>

</style>