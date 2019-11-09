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
    import $ from "jquery"
    export default {
        name: 'topimg',
        props:["data"],
    mounted() {
        $(".close-img").click(function () {
            $(".nav-top1").css({
                "display":"none"
            })
        })
    }
    }
</script>


<style scoped>

</style>