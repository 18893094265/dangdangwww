<template>
    <div>
        <section class="nav-btm">
            <div class="checkbox">
                <input type="checkbox" class="qanxuan"/>
            </div>
            <div class="img"></div><div>当当网</div><div>已免运费</div>
            <a href="">编辑</a>
        </section>
        <dd-car-content-productList></dd-car-content-productList>
    </div>
</template>

<script>
    import productList from "./pro/productList"
    export default {
        name: 'productList',
        components:{
            "dd-car-content-productList":productList
        }
    }
</script>


<style scoped>

</style>