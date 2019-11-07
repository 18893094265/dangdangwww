<template>
    <section class="con1">
        <div class="checkbox1">
            <input type="checkbox" class="danxuan" v-model="data.checked"/>
        </div>
        <div class="right-car">
            <div class="r-car-top">
                <img :src="data.pic" alt="">
                <div class="text">
                    <p>{{data.title}}</p>
                    <p>￥<span>{{data.price}}</span>&nbsp;<span>{{data.yprice}}</span></p>
                    <p><span>{{data.con}}</span><br>x1</p>
                </div>
            </div>
            <div class="r-car-btm">
                <p><span>加价购</span>&nbsp;购买本商品可选加价购</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'item',
        props:["data","sid","pid"]
    }
</script>


<style scoped>

</style>