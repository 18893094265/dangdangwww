<template>
    <div>
        <section class="min">
        <img :src="data.pic1" alt="">
        <div>
            <span>03</span>&nbsp;时&nbsp;<span>50</span>&nbsp;分&nbsp;<span>00</span>&nbsp;秒
        </div>
        </section>
        <img class="gif" :src="data.pic2" alt="">
    </div>
</template>

<script>
    export default {
        name: 'seckill',
        props:["data"]
    }
</script>


<style scoped>

</style>