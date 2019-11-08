<template>
    <div class="dediv">
        <div class="deleft">
            <div><span>{{data.i}}</span></div>
            <img :src="data.pic" alt="">
        </div>
        <div class="deright">
            <p>{{data.title}}</p>
            <p>{{data.author}}</p>
            <p>{{data.cb}}</p>
            <p><span>{{data.shop}}</span><span>{{data.activity}}</span></p>
            <p><span>￥</span><span>{{data.price}}</span><span>{{data.yprice}}</span></p>
            <p><span></span><span></span><span></span><span></span><span>{{data.num}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'listitem',
        props:["data","key"]
    }
</script>


<style scoped>

</style>