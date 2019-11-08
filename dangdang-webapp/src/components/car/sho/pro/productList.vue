<template>
    <div>
        <dd-car-content-item :data="product" v-for="(product,pid) in data.products" :key="pid" :sid="sid" :pid="pid"></dd-car-content-item>
    </div>
</template>

<script>
    import item from "./item"
    export default {
        name: 'productList',
        components:{
            "dd-car-content-item":item
        },
        props:["data","sid"]
    }
</script>

<style scoped>

</style>