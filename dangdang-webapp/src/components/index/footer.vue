<template>
    <footer>
        <div class="btm">
            <img :src="data.pic" alt="">
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