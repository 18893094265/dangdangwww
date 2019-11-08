<template>
    <section class="buying-btm">
        <p>促销专场<span>更多&nbsp;></span></p>
        <div class="btm-main">
            <dd-buying-reprice-repriceitem v-for="(reprice,j) in data" :key="j" :data="reprice"></dd-buying-reprice-repriceitem>
        </div>
    </section>
</template>

<script>
    import repriceitem from "../../components/buying/reprice/repriceitem"
    export default {
        name: 'reprice',
        components:{
            "dd-buying-reprice-repriceitem":repriceitem,
        },
        props:["data"]
    }
</script>


<style scoped>

</style>