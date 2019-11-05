<template>
    <footer>
        <div class="checkbox2">
            <input type="checkbox" id="list" class="cquanxuan" v-model="data.checked1"/><label for="list">全选</label>
        </div>
        <div>合计&nbsp;<span>￥</span><span>{{data.totalcost1}}</span></div>
        <div>结算<span>({{data.num}})</span></div>
    </footer>
</template>

<script>
    export default {
        name: 'vfooter',
        props:["data"]
    }
</script>


<style scoped>

</style>