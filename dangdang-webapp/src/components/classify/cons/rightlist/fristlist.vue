<template>
        <div><img :src="data.pic" alt=""><p>{{data.ps}}</p></div>
</template>

<script>
    export default {
        name: 'fristlist',
        props:["data","z"]
    }
</script>


<style scoped>

</style>