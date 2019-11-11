<template>
    <a href="#/login"><p>{{data.num}}</p><p>{{data.text}}</p></a>
</template>

<script>
    export default {
        name: 'navitem',
        props:["data"]
    }
</script>


<style scoped>

</style>