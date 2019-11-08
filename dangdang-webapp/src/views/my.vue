<template>
    <div id="app">
        <dd-my-header></dd-my-header>
        <main class="my-main">
            <dd-my-login></dd-my-login>
            <dd-my-nav :data="MyInfo.navs" v-if="MyInfo.navs"></dd-my-nav>
            <dd-my-order :data="MyInfo.order"></dd-my-order>
            <dd-my-imgs></dd-my-imgs>
            <dd-my-vip></dd-my-vip>
            <dd-my-myxx :data="MyInfo.myxxs"></dd-my-myxx>
            <dd-my-btm  :data="MyInfo.btm"></dd-my-btm>
        </main>
    </div>
</template>

<script>
    import myapi from "../apis/myapi"
    import header from "../components/my/header"
    import login from "../components/my/login"
    import nav from "../components/my/nav"
    import order from "../components/my/order"
    import vip from "../components/my/vip"
    import myxx from "../components/my/myxx"
    import imgs from "../components/my/imgs"
    import btm from "../components/my/btm"
    export default {
        name: 'my',
        components:{
            "dd-my-header":header,
            "dd-my-login":login,
            "dd-my-nav":nav,
            "dd-my-order":order,
            "dd-my-vip":vip,
            "dd-my-myxx":myxx,
            "dd-my-btm":btm,
            "dd-my-imgs":imgs
    },
        data(){
            return{
               MyInfo:[]
            }
        },
        methods:{
            adc(){
               myapi.getMyInfo(data=>{
                   this.MyInfo=data;
                   console.log(data)
               })
            }
        },
        beforeMount() {
            this.adc()
        }
    }
</script>


<style scoped>
    @import "../assets/my/my.css";
</style>