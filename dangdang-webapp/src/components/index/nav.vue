<template>
    <section class="nav-btm">
        <img :src="data.pic1" alt="">
        <input type="text" :placeholder="data.vinput">
        <img :src="data.pic2" alt="">
        <span></span>
    </section>
</template>

<script>
    import $ from "jquery"
    export default {
        name: 'vnav',
        props:["data"],
        mounted() {
            $(".nav-btm>img:nth-child(3)").click(()=>{
                location.href="#/main/classify"
            })
        }
    }
</script>


<style scoped>

</style>