<template>
    <a href=""><p>{{data.text}}</p><img :src="data.pic" alt=""></a>
</template>

<script>
    export default {
        name: 'repriceitem',
        props:["data"]
    }
</script>

<style scoped>

</style>