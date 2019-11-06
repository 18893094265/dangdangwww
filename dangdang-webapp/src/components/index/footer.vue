<template>
    <footer>
        <div class="btm">
            <dd-index-foot-footitem :key="j" :data="indexfooter" v-for="(indexfooter,j) in data.indexfooters" :j="j"></dd-index-foot-footitem>
        </div>
    </footer>
</template>

<script>
    import footitem from "./foot/footitem"
    export default {
        name: 'vfooter',
        components:{
            "dd-index-foot-footitem":footitem
        },
        props:["data"]
    }
</script>


<style scoped>

</style>