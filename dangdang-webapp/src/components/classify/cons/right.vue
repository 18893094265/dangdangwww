<template>
    <section class="right">
        <div class="right1">
            <dd-classify-con-right-banner>

            </dd-classify-con-right-banner>
            <div class="div1">
                <dd-classify-con-right-squre :j="j" :data="squre" v-for="(squre,j) in data.squres" :key="j"></dd-classify-con-right-squre>
            </div>
            <div class="div2">
                <div class="div2-top">榜单</div>
                <div class="div2-btm">
                    <dd-classify-con-right-firstlist :z="z" :data="fristlist" v-for="(fristlist,z) in data.fristlists" :key="z"></dd-classify-con-right-firstlist>
                </div>
            </div>
            <dd-classify-con-right-author :f="f" :data="author" v-for="(author,f) in data.authors" :key="f">

            </dd-classify-con-right-author>
        </div>
    </section>
</template>

<script>
    import banner from "./rightlist/banner"
    import squre from "./rightlist/squre"
    import firstlist from "./rightlist/fristlist"
    import author from "./rightlist/author"
    export default {
        name: 'vright',
        components:{
            "dd-classify-con-right-banner":banner,
            "dd-classify-con-right-squre":squre,
            "dd-classify-con-right-firstlist":firstlist,
            "dd-classify-con-right-author":author
        },
        props:["data"]
    }
</script>


<style scoped>

</style>