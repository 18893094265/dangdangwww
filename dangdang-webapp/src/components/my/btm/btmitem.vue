<template>
    <div class="mydiv10 mydiv2"><a href="#/login" :style="'background-image:url('+data.pic+')'">{{data.text}}</a><a href="#/login"></a></div>
</template>

<script>
    export default {
        name: 'btmitem',
        props:["data"]
    }
</script>


<style scoped>

</style>