<template>
    <a href="">{{data.text}}</a>
</template>

<script>
    export default {
        name: 'header',
        props:["data"]
    }
</script>


<style scoped>
    a{
        margin-top:0.15rem;
    }
</style>