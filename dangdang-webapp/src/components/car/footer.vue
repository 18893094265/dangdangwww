<template>
    <footer class="footer1">
        <div class="checkbox2">
            <input type="checkbox" id="list" class="cquanxuan" @click="selectAll" v-model="data.checked1"/><label for="list">全选</label>
        </div>
        <div>合计&nbsp;<span>￥</span><span>{{data.totalcost1}}</span></div>
        <div>结算<span>({{data.num}})</span></div>
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
                cartInfo.shops.forEach((shop,sid)=>{
                    shop.products.forEach((product,pid)=>{
                        if(product.checked){
                        total +=product.price*product.num
                        }
                    })
                });
                return total;
            }
        }
    }
</script>


<style scoped>

</style>