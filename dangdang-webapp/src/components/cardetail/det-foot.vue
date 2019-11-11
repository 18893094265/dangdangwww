<template>
<div class="det-foot">
    <p><img src="http://59.110.229.146/images/cardetail/like.png" >收藏</p>
    <p><img src="http://59.110.229.146/images/cardetail/car1.png" >购物车</p>
    <a href="#" class="det-cart">加入购物车</a>
    <p class="det-pay">立即购买</p>
</div>
</template>

<script>
    export default {
        name: "det-foot"
    }
</script>

<style scoped>
.det-foot{
    width: 100%;
    position: fixed;
    bottom: 0;
    height:0.5rem;
    display: flex;
    font-size: 0.12rem;
    color: dimgray;
    border-top: 0.01rem solid gainsboro;
    background-color:white;
    border-bottom: 0.01rem solid gainsboro;
}
.det-foot>p>img{
    width: 0.2rem;
    padding-left:0.17rem;
}
.det-foot>p:nth-child(1), .det-foot>p:nth-child(2){
    color: dimgray;
    width: 0.6rem;
    padding: 0.1rem 0 0 0.1rem;
    text-align: center;
    height: 0.5rem;
    border-right: 0.01rem solid gainsboro;
}
.det-cart{
    width: 1.27rem;
    height: 100%;
    font-size: 0.15rem;
    text-decoration: none;
    color: white;
    text-align: center;
    line-height: 0.5rem;
    background-color: rgb(255,188,0);
}
.det-pay{
    width: 1.28rem;
    height: 100%;
    font-size: 0.15rem;
    color: white;
    text-align: center;
    line-height: 0.5rem;
    background-color: rgb(255,51,0);
}
</style>
