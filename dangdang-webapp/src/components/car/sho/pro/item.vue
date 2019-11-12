<template>
    <section class="con1">
        <div class="checkbox1">
            <input type="checkbox" @change="pAll(sid)" class="danxuan" v-model="data.checked"/>
        </div>
        <div class="right-car">
            <div class="r-car-top">
                <img :src="data.pic" alt="">
                <div class="text">
                    <p>{{data.title}}</p>
                    <p>￥<span>{{data.price}}</span>&nbsp;<span>{{data.yprice}}</span></p>
                    <p><span>{{data.con}}</span><br>x<span>{{data.num}}</span><span class="car-spn"></span></p>
                </div>
            </div>
            <div class="r-car-btm">
                <p><span>加价购</span>&nbsp;购买本商品可选加价购</p>
            </div>
        </div>
    </section>
</template>

<script>
    import $ from "jquery"
    export default {
        name: 'item',
        methods:{
          pAll(sid){
              this.$emit("pAll",sid)
          }
        },
        props:["data","sid","pid"],
        mounted(){
            $(".r-car-top>img").click(()=>{
                location.href="#/cardetail"
            });
            $(".car-spn").click(()=>{
                $(".text").css({
                    "display":"none"
                })
            })
        }
    }
</script>


<style scoped>
    .text{
        position: relative;
    }
    .car-spn{
        display: inline-block;
        width:0.3rem;
        height:0.3rem;
        position: absolute;
        top:0.8rem;
        left:1.7rem;
    }
</style>