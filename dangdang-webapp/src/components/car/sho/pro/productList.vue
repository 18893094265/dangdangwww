<template>
    <div>
        <dd-car-content-item :data="product" v-for="(product,pid) in data" :key="pid" :sid="sid"></dd-car-content-item>
    </div>
</template>

<script>
    import item from "./item"
    export default {
        name: 'item',
        components:{
            "dd-car-content-item":item
        },
        props:["data","sid"]
    }
</script>

<style scoped>

</style>