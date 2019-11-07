<template>
    <div id="app">
        <dd-classify-header v-if="classifyInfo" :data="classifyInfo.vheader">

        </dd-classify-header>
        <dd-classify-content v-if="classifyInfo" :data="classifyInfo">

        </dd-classify-content>
    </div>
</template>

<script>
    import classifyapi from "../apis/classifyapi"
    import vheader from "../components/classify/header"
    import content from "../components/classify/content"
    export default {
        name: 'classify',
        components:{
            "dd-classify-header": vheader,
            "dd-classify-content": content
        },
        data() {
            return {
                classifyInfo: [],
            }
        },
        methods: {
            _initPageData() {
                classifyapi.getClassifyInfo(data => {
                    this.classifyInfo = data;
                    console.log(data)
                });
            }
        },
        beforeMount(){
            this._initPageData()
        }
    }
</script>


<style scoped>
    @import "../../src/assets/classify/classify.css";
</style>