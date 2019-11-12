<template>
    <footer class="footer1">
        <div class="checkbox2">
            <input type="checkbox" id="list" class="cquanxuan" @change="selectAll" v-model="data.carfooter.checked1"/><label for="list">全选</label>
        </div>
        <div>合计&nbsp;<span>￥</span><span>{{data|countPrice}}</span></div>
        <div>结算<span>({{data | nums}})</span></div>
    </footer>
</template>

<script>
    export default {
        name: 'vfooter',
        props: ["data"],
        methods: {
            selectAll() {
                this.$emit("cAll")
            }
        },
        filters:{
            countPrice(cartInfo){
                let total = 0;
                cartInfo.shops.forEach((shop)=>{
                    shop.products.forEach((product)=>{
                        if(product.checked){
                            total +=product.price*product.num
                        }
                    })
                });
                return total;
            },
            nums(cartInfo){
                let sum =0;
                cartInfo.shops.forEach((shop)=>{
                    shop.products.forEach((product)=>{
                        if(product.checked){
                            sum +=product.num
                        }
                    })
                });
                return sum;
            }
        }
    }
</script>


<style scoped>

</style>