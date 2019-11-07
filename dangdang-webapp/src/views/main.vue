<template>
    <div>
        <router-view></router-view>
        <vsfooter></vsfooter>
    </div>
</template>

<script>
    import vfooter from "../components/common/footer"
    export default {
        name: "vmain",
        components:{
            "vsfooter":vfooter
        }
    }
</script>

<style scoped>
    @import "../../public/static/common1.css";
</style>