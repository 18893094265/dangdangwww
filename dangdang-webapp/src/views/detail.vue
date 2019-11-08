<template>
    <div id="app">
        <dd-detail-header :data="detailInfo.header"></dd-detail-header>
        <main class="demain">
            <dd-detail-nav :data="detailInfo.navs"></dd-detail-nav>
            <dd-detail-topmark :data="detailInfo.topmarks"></dd-detail-topmark>
            <dd-detail-list :data="detailInfo.lists"></dd-detail-list>
        </main>
    </div>
</template>

<script>
    import detailapi from "../apis/detailapi"
    import header from "../components/detail/header"
    import list from "../components/detail/list"
    import nav from "../components/detail/nav"
    import topmark from "../components/detail/topmark"
    export default {
        name: 'detail',
        components: {
            "dd-detail-header": header,
            "dd-detail-list": list,
            "dd-detail-nav": nav,
            "dd-detail-topmark": topmark
        },
        data(){
            return{
                detailInfo:[]
            }
        },
        methods:{
            adc(){
                detailapi.getDetailInfo(data=>{
                    this.detailInfo=data;
                    console.log(data)
                })
            }
        },
        beforeMount() {
            this.adc();
        }
    }
</script>


<style scoped>
    @import "../assets/detail/detail.css";
</style>