<template>
    <div>
        <dd-car-header></dd-car-header>
        <dd-car-content :data="cartInfo" v-if="cartInfo"></dd-car-content>
        <dd-car-footer :data="cartInfo.carfooter" v-if="cartInfo.carfooter"></dd-car-footer>
    </div>
</template>

<script>
    import cartapi from "../apis/cartapi"
    import header from "../components/car/header"
    import footer from "../components/car/footer"
    import content from "../components/car/content"
    export default {
        name: 'car',
        components: {
            "dd-car-header": header,
            "dd-car-footer": footer,
            "dd-car-content": content
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