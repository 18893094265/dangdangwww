<template>
    <main>
        <section class="nav-top">
            <span>当当自营订单满49元包邮 , 已免运费6元</span><span></span>
        </section>
        <dd-car-content-shopList></dd-car-content-shopList>
    </main>

</template>

<script>
    import shopList from "./sho/shopList"
    export default {
        name: 'shop',
        components:{
            "dd-car-content-shopList":shopList
        }
    }
</script>


<style scoped>

</style>