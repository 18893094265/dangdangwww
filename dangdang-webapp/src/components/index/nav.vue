<template>
    <section class="nav-btm">
        <img :src="data.pic1" alt="">
        <input type="text" :placeholder="data.input">
        <img :src="data.pic2" alt="">
        <span></span>
    </section>
</template>

<script>
    export default {
        name: 'vnav',
        props:["data"]
    }
</script>


<style scoped>

</style>