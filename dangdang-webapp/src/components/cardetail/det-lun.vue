<template>
    <div class="det-sli" @click.self="change1">
        <img :src="item1">
        <ul class="det-doc">
            <li  v-for="(item,index) in images" :key="index"  @click="change(index,item)"  class="active"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "det-lun",
        data(){
            return{
                number:0,
                item1:"http://59.110.229.146/images/cardetail/23736076-1_e_8.jpg",
                images:[
                    "http://59.110.229.146/images/cardetail/23736076-1_e_8.jpg",
                    "http://59.110.229.146/images/cardetail/23736076-2_e_10.jpg",
                    "http://59.110.229.146/images/cardetail/23736076-3_e_10.jpg",
                    "http://59.110.229.146/images/cardetail/23736076-4_e_6.jpg",
                    "http://59.110.229.146/images/cardetail/23736076-5_e_6.jpg",
                    "http://59.110.229.146/images/cardetail/23736076-5_e_6.jpg",
                    "http://59.110.229.146/images/cardetail/23736076-6_e_6.jpg",
                    "http://59.110.229.146/images/cardetail/23736076-7_e_2.jpg"
                ]
            }
        },
        methods:{
            change:function(index,item){
                this.number=index;
                this.item1=item;
            },
            change1:function(){
                if(this.number>6){
                    this.number=0
                }
                this.number++;
                this.item1.next();
            }
        },
        mounted() {
            /*setInterval(this.change,10000);*/
        }
    }
</script>

<style scoped>
    .det-doc>.active{
        background-color:red;
    }
.det-sli{
    background-color: white;
    position: relative;
    width: 100%;
    height: 3rem;
    border-bottom: 0.01rem solid gainsboro;
}
    .det-doc{
        width: 1rem;
        height: 0.1rem;
        display: flex;
        justify-content: space-around;
        position: absolute;
        top: 2.7rem;
        left: 1.4rem;
    }
    .det-sli>img{
        width: 50%;
        position: absolute;
        bottom: 0.6rem;
        left: 0.95rem;
    }
.det-doc>li{
    background-color: rgb(160,160,160);
    width: 0.07rem;
    height: 0.06rem;
    border-radius: 50%;
}
</style>
