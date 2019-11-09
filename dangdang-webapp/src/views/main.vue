<template>
    <div>
        <router-view></router-view>
        <vsfooter :data="maininfo.imgs" v-if="maininfo.imgs"></vsfooter>
    </div>
</template>

<script>
    import mainapi from "../apis/mainapi";
    import vfooter from "../components/common/footer"
    export default {
        name: "vmain",
        components:{
            "vsfooter":vfooter
        },
        data() {
            return {
                maininfo: [],
            }
        },
        methods: {
            _initPageData() {
                mainapi.getMainInfo(data => {
                    this.maininfo = data;
                    console.log(data)
                });
            }
        },
        beforeMount() {
            this._initPageData()
        }
    }
</script>

<style scoped>
    @import "../../public/static/common1.css";
</style>