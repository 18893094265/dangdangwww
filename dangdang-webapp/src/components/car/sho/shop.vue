<template>
    <div>
        <section class="nav-btm">
            <div class="checkbox">
                <input type="checkbox" v-model="data.checked" @change="shopChecked(sid)" class="qanxuan"/>
            </div>
            <div class="img"></div><div>{{data.shopName}}</div><div>{{data.goods}}</div>
            <a href="">编辑</a>
        </section>
        <dd-car-content-productList :data="data" @pAll="pAll" :sid="sid"></dd-car-content-productList>
    </div>
</template>

<script>
    import productList from "./pro/productList"
    export default {
        name: 'shop',
        components:{
            "dd-car-content-productList":productList
        },
        props:["data","sid"],
        methods:{
            shopChecked(sid){
                this.$emit("sAll",sid)
            },
            pAll(sid){
                this.$emit("pAll",sid)
            }
        }
    }
</script>


<style scoped>

</style>