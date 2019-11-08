<template>
    <section class="box">
        <dd-my-myxx-myxxitem :data="myxx" v-for="(myxx,j) in data" :key="j"></dd-my-myxx-myxxitem>
    </section>
</template>

<script>
    import myxxitem from "./myxx/myxxitem";
    export default {
        name: 'myxx',
        props:["data"],
        components:{
            "dd-my-myxx-myxxitem":myxxitem
        }
    }
</script>


<style scoped>

</style>