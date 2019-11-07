<template>
    <section class="right">
        <dd-classify-con-right-banner>

        </dd-classify-con-right-banner>
        <div class="div1">
            <dd-classify-con-right-squre></dd-classify-con-right-squre>
        </div>
        <div class="div2">
            <div class="div2-top">榜单</div>
            <div class="div2-btm">
                <dd-classify-con-right-firstlist></dd-classify-con-right-firstlist>
            </div>
        </div>
        <dd-classify-con-right-author>

        </dd-classify-con-right-author>

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
        }
    }
</script>


<style scoped>

</style>