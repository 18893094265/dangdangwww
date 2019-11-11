<template>
    <div class="details">
        <det-head></det-head>
        <det-sli></det-sli>
        <det-bot></det-bot>
        <det-sel></det-sel>
        <det-mid></det-mid>
        <det-pro></det-pro>
        <det-link></det-link>
        <det-foot></det-foot>
    </div>
</template>

<script>
    import head from "../components/cardetail/det-head"
    import foot from "../components/cardetail/det-foot"
    import slid from "../components/cardetail/det-lun"
    import sel from "../components/cardetail/det-sele"
    import miaob from "../components/cardetail/det-miao-bot"
    import middle from "../components/cardetail/det-middle"
    import pro from "../components/cardetail/det-pro"
    import link from "../components/cardetail/det-link"
    export default {
        name: "cardetail",
        components:{
            "det-head":head,
            "det-foot":foot,
            "det-sli":slid,
            "det-bot":miaob,
            "det-sel":sel,
            "det-mid":middle,
            "det-pro":pro,
            "det-link":link
        }
    }
</script>

<style scoped>
    .details{
        background-color:rgb(244,244,244);
    }
</style>
