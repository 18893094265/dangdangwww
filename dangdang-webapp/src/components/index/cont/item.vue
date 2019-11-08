<template>
    <a href="#/main/detail"><img :src="conent.pic" alt=""></a>
</template>

<script>
    export default {
        name: 'item',
        props:["data","conent","i"]
    }


</script>


<style scoped>

</style>