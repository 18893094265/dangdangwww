<template>
    <div class="det-pro">
        <div class="det-like"><span>{{msg}}</span><img :src="pic1" alt=""></div>
        <div class="det-pro-con" v-for="(val,index) in info" :key="index">
            <img :src="val.pic" ><br/>{{val.desc}}<br/>
            <span>￥{{val.price}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "det-pro",
        data(){
            return{
                "info":[{"pic":"http://59.110.229.146/images/cardetail/23736076-1_e_8.jpg",
                    "desc":"Onitsuka Tlg...","price":"11.9"},
                    {"pic":"http://59.110.229.146/images/cardetail/23736076-2_e_10.jpg",
                        "desc":"VANS万斯 男...","price":"19.5"},
                    {"pic":"http://59.110.229.146/images/cardetail/23736076-3_e_10.jpg",
                        "desc":"NIKE耐克201...","price":"9.9"},
                    {"pic":"http://59.110.229.146/images/cardetail/23736076-4_e_6.jpg",
                        "desc":"BASTO/百思...","price":"10.6"},
                    {"pic":"http://59.110.229.146/images/cardetail/23736076-5_e_6.jpg",
                        "desc":"adidas Origin...","price":"6.9"},
                    {"pic":"http://59.110.229.146/images/cardetail/23736076-5_e_6.jpg",
                        "desc":"Onitsuka Tlg...","price":"15.9"}],
                "pic1":"http://59.110.229.146/images/cardetail/open.png",
                "msg":"喜欢此商品的人还买了"
            }
        }
    }
</script>

<style scoped>
.det-pro{
    width: 100%;
    font-size: 0.13rem;
    color: gray;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    background-color: white;
    margin-bottom: 0.1rem;
}
.det-pro-con>img{
    width: 90%;
    margin-top: 0.1rem;
    margin-bottom: 0.05rem;
    border: 0.01rem solid gainsboro;
}
.det-pro-con>span{
    color: red;
    height: 0.17rem;
    line-height: 0.17rem;
    display: inline-block;
    margin-top: 0.15rem;
    font-size: 0.16rem;
    font-weight: bold;
}
.det-pro-con{
    text-align: center;
    width: 30%;
    line-height: 0.15rem;
    margin-bottom: 0.1rem;
}
.det-like>img{
    margin-top: 0.15rem;
    height: 0.13rem;
    width: 0.07rem;
}
.det-like{
    display: flex;
    padding-right: 0.12rem;
    justify-content: space-between;
    line-height: 0.45rem;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    padding-left: 0.1rem;
    height: 0.45rem;
    border-bottom: 0.01rem solid gainsboro;
}
</style>
