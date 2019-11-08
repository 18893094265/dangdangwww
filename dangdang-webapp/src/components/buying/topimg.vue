<template>
    <section class="top">
        <dd-buying-topimg-topimgitem v-for="(topimg,i) in data" :key="i" :data="topimg"></dd-buying-topimg-topimgitem>
    </section>
</template>

<script>
    import topimgitem from "../../components/buying/topimg/topimgitem"
    export default {
        name: 'topimg',
        components:{
            "dd-buying-topimg-topimgitem":topimgitem
        },
        props:["data"]
    }
</script>


<style scoped>

</style>