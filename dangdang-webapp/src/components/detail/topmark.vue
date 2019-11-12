<template>
    <section class="denav-btm">
        <dd-detail-topmark-item :data="topmark" v-for="(topmark,j) in data" :key="j"></dd-detail-topmark-item><span class="detailspan"></span>
    </section>
</template>

<script>
    import $ from "jquery"
    import topMarkItem from "./topmark/topMarkItem";
    export default {
        name: 'vheader',
        props:["data"],
        components:{
            "dd-detail-topmark-item":topMarkItem
        },
        mounted() {
            $(".detailspan").click(()=>{
                if($(".denav-btm").hasClass("denav-btm1")){
                    $(".denav-btm").removeClass("denav-btm1");
                }else{
                    $(".denav-btm").addClass("denav-btm1");
                    $(this).rotate(90)
                }
            })
        }
    }
</script>


<style scoped>
    .denav-btm{
        position: relative;
        overflow: hidden;
        padding-right:0.3rem;
        box-sizing: border-box;
    }
    .denav-btm1{
        height:270px;
    }
    .detailspan{
        display: inline-block;
        width:0.2rem;
        height:0.2rem;
        position: absolute;
        left:3.48rem;
        top:0.13rem;
    }
</style>