<template>
    <div>
        <dd-car-header :data="cartInfo.header" v-if="cartInfo.header"></dd-car-header>
        <dd-car-content :data="cartInfo" @pAll="productSelectAll" v-if="cartInfo" @sAll="shopSelectAll"></dd-car-content>
        <dd-car-footer :data="cartInfo" v-if="cartInfo" @cAll="carSelectAll"></dd-car-footer>
    </div>
</template>

<script>
    import cartapi from "../apis/cartapi"
    import sheader from "../components/common/header"
    import sfooter from "../components/car/footer"
    import scontent from "../components/car/content"
    export default {
        name: 'car',
        components: {
            "dd-car-header": sheader,
            "dd-car-footer": sfooter,
            "dd-car-content": scontent
        },
        data() {
            return {
                cartInfo: [],
                flag:true
            }
        },
        methods: {
            _initPageData() {
                cartapi.getCartInfoByUserId(data => {
                    this.cartInfo = data;
                });
            },
            // 购物车全选反选
            carSelectAll(){
                let checked = this.cartInfo.carfooter.checked1;
                this.cartInfo.shops.forEach((shop)=>{
                    shop.checked = checked;
                    shop.products.forEach((product)=>{
                        product.checked =checked;
                    })
                })
            },
            //店铺的全选与反选
            shopSelectAll(sid){
                let checked = this.cartInfo.shops[sid].checked;
                console.log(sid);
                this.cartInfo.shops[sid].products.forEach((product) => {
                    product.checked = checked;
                });
                let blchecked = this.cartInfo.shops.every((shop)=>{
                    return shop.checked == true;
                });
                this.cartInfo.carfooter.checked1 = blchecked;
            },
            //单选：
            productSelectAll(sid){
                console.log(sid);
                let checked = this.cartInfo.shops[sid].products.every((product)=>{
                    return product.checked == true;
                });
                this.cartInfo.shops[sid].checked = checked;
                let schecked = this.cartInfo.shops.every((shop)=>{
                    return shop.checked ==true;
                });
                this.cartInfo.carfooter.checked1 = schecked;
            },
            //计算总价
            // _countCartPrice(){
            //     let total = 0;
            //     this.cartInfo.shops.forEach((shop)=>{
            //         shop.products.forEach((product)=>{
            //             if(product.checked){
            //                 total +=product.price * product.num
            //             }
            //         })
            //     });
            //     return total
            // }
        },
        beforeMount(){
            this._initPageData();
        },
        // watch:{
        //     cartInfo:{
        //         handler(){
        //             let total= this._countCartPrice();
        //             console.log(total);
        //             if(total >=80 && this.flag){
        //                 this.flag = false;
        //                 console.log("send 100 cent")
        //             }
        //         },
        //         deep:true
        //     }
        // }
    }
</script>

<style scoped>
    @import "../assets/car/car.css";
</style>