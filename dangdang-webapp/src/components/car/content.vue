<template>
    <main>
        <section class="nav-top">
            <span>当当自营订单满49元包邮 , 已免运费6元</span><span></span>
        </section>
        <dd-car-content-shop :key="sid" :data="shop" v-for="(shop,sid) in data"></dd-car-content-shop>
    </main>
</template>

<script>
    import shop from "./sho/shop"
    export default {
        name: 'shop',
        components:{
            "dd-car-content-shop":shop
        },
        props:["data"]
    }
</script>


<style scoped>

</style>