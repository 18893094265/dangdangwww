<template>
    <footer>
        <div class="btm">
            <a href="#/main/index"><img :src="data.pic1" alt=""></a>
            <a href="#/main/classify"><img :src="data.pic2" alt=""></a>
            <a href="#/main/buying"><img :src="data.pic3" alt=""></a>
            <a href="#/main/car"><img :src="data.pic4" alt=""></a>
            <a href="#/main/my"><img :src="data.pic5" alt=""></a>
        </div>
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