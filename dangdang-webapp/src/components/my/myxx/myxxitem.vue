<template>
    <div class="mydiv5 mydiv2"><a href="" :style="'background-image:url('+data.pic+')'">{{data.text}}</a><a href=""></a></div>
</template>

<script>
    export default {
        name: 'myxxitem',
        props:["data"]
    }
</script>


<style scoped>

</style>