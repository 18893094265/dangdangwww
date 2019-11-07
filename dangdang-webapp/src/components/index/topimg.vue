<template>
    <div>
        <section class="nav-top1">
            <img :src="data.pic1" alt="">
            <img :src="data.pic2" alt="">
        </section>
        <img class="close-img" :src="data.pic3" alt="">
    </div>
</template>

<script>
    export default {
        name: 'topimg',
        props:["data"]
    }
</script>


<style scoped>

</style>