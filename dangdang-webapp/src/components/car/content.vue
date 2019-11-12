<template>
    <main class="car-main">
        <section class="nav-top">
            <span>当当自营订单满49元包邮 , 已免运费6元</span><span class="ch"></span>
        </section>
        <dd-car-content-shop :key="sid" :data="shop" @pAll="pAll" @sAll="sAll(sid)" v-for="(shop,sid) in data.shops" :sid="sid"></dd-car-content-shop>
    </main>
</template>

<script>
    import $ from "jquery"
    import shop from "./sho/shop"
    export default {
        name: 'vcontent',
        components:{
            "dd-car-content-shop":shop
        },
        props:["data"],
        methods:{
            sAll(sid){
               this.$emit("sAll",sid)
            },
            pAll(sid){
                this.$emit("pAll",sid)
            }
        },
        mounted() {
            $(".ch").click(()=>{
                $(".nav-top").css({
                    "display":"none"
                });
            })
        }
    }
</script>


<style scoped>

</style>