<template>
    <div>
        <dd-login-header></dd-login-header>
        <dd-login-loginmain>

        </dd-login-loginmain>
    </div>
</template>

<script>
    // import indexapi from "../apis/indexapi"
    import header from "../components/login/vheader"
    import loginmain from "../components/login/vmain"
    // import nav from "../components/index/nav"
    // import navimg1 from "../components/index/navimg1"
    // import navimg2 from "../components/index/navimg2"
    // import seckill from "../components/index/seckill"
    export default {
        name: 'car',
        components: {
            // "dd-index-topimg": topimg,
            // "dd-index-content": content,
            // "dd-index-nav": nav,
            // "dd-index-navimg1": navimg1,
            "dd-login-loginmain": loginmain,
            "dd-login-header": header
        }
        // data() {
        //     return {
        //         indexInfo: [],
        //     }
        // },
        // methods: {
        //     _initPageData() {
        //         indexapi.getIndexInfo(data => {
        //             this.indexInfo = data;
        //         });
        //     }
        // },
        // beforeMount(){
        //     this._initPageData()
        // }
    }
</script>

<style scoped>
    @import "../assets/index/index.css";
    @import "../../node_modules/swiper/css/swiper.css";
</style>