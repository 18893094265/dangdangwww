<template>
    <a><img :src="data.pic" alt=""><p>{{data.text}}</p><p><span>￥</span><span>{{data.price}}</span></p><p>{{data.yprice}}</p></a>
</template>

<script>
    export default {
        name: 'minsitem',
        props:["data"]
    }
</script>

<style scoped>

</style>