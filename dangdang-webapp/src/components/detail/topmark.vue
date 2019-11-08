<template>
    <section class="denav-btm">
        <dd-detail-topmark-item :data="topmark" v-for="(topmark,j) in data" :key="j"></dd-detail-topmark-item>
    </section>
</template>

<script>
    import topMarkItem from "./topmark/topMarkItem";
    export default {
        name: 'vheader',
        props:["data"],
        components:{
            "dd-detail-topmark-item":topMarkItem
        }

    }
</script>


<style scoped>

</style>