<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(u,index) in banner" :key="index"><img :src="u" ></div>
        </div>
        <!-- 如果需要分页器 -->
<!--        <div class="swiper-pagination"></div>-->
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "banner",
        data(){
            return {
                banner:[
                    require("../../../../../src/assets/images/imgs1/10ynew1242x366.jpg"),
                    require("../../../../../src/assets/images/imgs1/1242-366-1570761039.jpg"),
                    require("../../../../../src/assets/images/imgs1/222060123100431_y.jpg"),
                    require("../../../../../src/assets/images/imgs1/215060129932701_y.jpg")
                ]
            }
        },
        mounted(){
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination:{
                    el: '.swiper-pagination'
                },

                autoplay:true

            })
        }
    }
</script>


<style scoped>
    .swiper-slide img{
        width: 100%;
        height:1.02rem;
    }

</style>