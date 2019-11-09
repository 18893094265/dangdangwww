<template>
    <div id="app">
        <dd-buying-header v-if="buyingInfo.header" :data="buyingInfo.header"></dd-buying-header>
        <main  class="buyingmain">
            <dd-buying-topimg v-if="buyingInfo.topimgs" :data="buyingInfo.topimgs"></dd-buying-topimg>
            <dd-buying-reprice v-if="buyingInfo.reprices" :data="buyingInfo.reprices"></dd-buying-reprice>
            <dd-buying-mins v-if="buyingInfo.mines" :data="buyingInfo.mines"></dd-buying-mins>
        </main>
    </div>
</template>

<script>
    import buyingapi from "../apis/buyingapi";
    import vheader from "../components/common/header"
    import mins from "../components/buying/mins"
    import reprice from "../components/buying/reprice"
    import topimg from "../components/buying/topimg"
    export default {
        name: 'buying',
        components:{
            "dd-buying-header":vheader,
            "dd-buying-mins":mins,
            "dd-buying-reprice":reprice,
            "dd-buying-topimg":topimg
        },
        data(){
            return{
               buyingInfo:[]
            }
        },
        methods:{
            adc(){
                buyingapi.getBuyingInfo(data=>{
                    this.buyingInfo = data;
                    // console.log(data)
                });
            }
        },
        beforeMount() {
            this.adc();
        }
    }
</script>


<style scoped>
    @import "../assets/buying/buying.css";
</style>