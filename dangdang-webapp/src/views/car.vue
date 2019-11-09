<template>
    <div>
        <dd-car-header :data="cartInfo.header" v-if="cartInfo.header"></dd-car-header>
        <dd-car-content :data="cartInfo" v-if="cartInfo"></dd-car-content>
        <dd-car-footer :data="cartInfo.carfooter" v-if="cartInfo.carfooter"></dd-car-footer>
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
            }
        },
        methods: {
            _initPageData() {
                cartapi.getCartInfoByUserId(data => {
                    this.cartInfo = data;
                });
            }
        },
        beforeMount(){
            this._initPageData()
        }
    }
</script>

<style scoped>
    @import "../assets/car/car.css";
</style>