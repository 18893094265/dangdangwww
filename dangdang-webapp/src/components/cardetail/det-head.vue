<template>
    <div class="cart-head">
        <img src="http://59.110.229.146/images/imgs2/arrow_left.png">
        <p class="cart-head-p">商品详情</p>
        <img src="http://59.110.229.146/images/imgs2/menu.png">
    </div>
</template>

<script>
    import $ from "jquery"
    export default {
        name: "det-head",
        mounted() {
            $(".cart-head>img:nth-child(1)").click(()=>{
                 window.history.go(-1);
            })
        }
    }
</script>

<style scoped>
    .cart-head{
        width: 100%;
        height: 0.45rem;
        background-color: rgb(248,248,248);
        display: flex;
    }
    .cart-head>img:nth-child(1){
        width: 0.1rem;
        height: 0.2rem;
        margin-top: 0.13rem;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
    }
    .cart-head>img:nth-child(3){
        width: 0.23rem;
        height: 0.1rem;
        margin-left: 0.2rem;
        margin-top: 0.133rem;
    }
    .cart-head-p{
        font-size: 0.2rem;
        padding-left: 1.2rem;
        line-height: 0.45rem;
        margin-right: 0.9rem;
    }
</style>
