<template>
        <!--书-->
        <section class="book">
            <dd-index-content-shop :data="data" v-for="(conent, i) in data" :key="i" :conent="conent"></dd-index-content-shop>
<!--            <div><img src="../../assets/images/imgs1/chagnxiao-1562827477.png" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/xinshu-1563173497.png" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/SY-iCON-3-5.10-1557488951.png" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/icon-cx-1559818801.png" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/icon-5.28-1559032809.png" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/116550067538580_y.jpg" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/7chaoshi-1545121233.png" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/00000-1564393723.png" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/9zhongxin-1545121233.png" alt=""></div>-->
<!--            <div><img src="../../assets/images/imgs1/12311-1556245256.jpg" alt=""></div>-->
        </section>
</template>

<script>
    import item from "./cont/item"
    export default {
        name: 'contents',
        components:{
            "dd-index-content-shop":item
        },
        props:["data","conent"]
    }
</script>


<style scoped>

</style>