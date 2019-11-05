<template>
    <div>
        <dd-car-header></dd-car-header>
        <dd-car-content></dd-car-content>
        <dd-car-footer></dd-car-footer>
    </div>
</template>

<script>
    import header from "../components/car/header"
    import footer from "../components/car/footer"
    import content from "../components/car/content"
    export default {
        name: 'car',
        components:{
            "dd-car-header":header,
            "dd-car-footer":footer,
            "dd-car-content":content
        }
    }
</script>


<style scoped>
    @import "../assets/car/car.css";
</style>