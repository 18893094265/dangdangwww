<template>
    <div>
        <dd-index-topimg v-if="indexInfo.topimg" :data="indexInfo.topimg"></dd-index-topimg>
        <dd-index-nav v-if="indexInfo.nav" :data="indexInfo.nav"></dd-index-nav>
        <dd-index-navimg1></dd-index-navimg1>
        <dd-index-navimg2 v-if="indexInfo.navimg2" :data="indexInfo.navimg2"></dd-index-navimg2>
        <dd-index-content v-if="indexInfo" :data="indexInfo"></dd-index-content>
        <dd-index-seckill v-if="indexInfo.seckill" :data="indexInfo.seckill"></dd-index-seckill>
    </div>
</template>

<script>
    import indexapi from "../apis/indexapi"
    import topimg from "../components/index/topimg"
    import content from "../components/index/content"
    import nav from "../components/index/nav"
    import navimg1 from "../components/index/navimg1"
    import navimg2 from "../components/index/navimg2"
    import seckill from "../components/index/seckill"
    export default {
        name: 'car',
        components: {
            "dd-index-topimg": topimg,
            "dd-index-content": content,
            "dd-index-nav": nav,
            "dd-index-navimg1": navimg1,
            "dd-index-navimg2": navimg2,
            "dd-index-seckill": seckill
        },
        data() {
            return {
                indexInfo: [],
            }
        },
        methods: {
            _initPageData() {
                indexapi.getIndexInfo(data => {
                    this.indexInfo = data;
                });
            }
        },
        beforeMount(){
            this._initPageData()
        }
    }
</script>

<style scoped>
    @import "../assets/index/index.css";
    @import "../../node_modules/swiper/css/swiper.css";
</style>