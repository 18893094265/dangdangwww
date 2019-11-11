<template>
    <div>
        <dd-classify-header v-if="classifyInfo.vheader" :data="classifyInfo.vheader">

        </dd-classify-header>
        <dd-classify-content v-if="classifyInfo.content" :data="classifyInfo.content" :scr="classifyInfo.content.rights[id]">

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
                id:0
            }
        },
        methods: {
            _initPageData() {
                classifyapi.getclassifyInfo(data => {
                    this.classifyInfo = data;
                });
            }
        },
        beforeMount(){
            this._initPageData()
        },
        mounted(){
            this.$bus.$on("change",(i)=>{
                this.id=i;
                console.log(i)
            })
        }
    }
</script>


<style scoped>
    @import "../assets/classify/classify.css";
</style>