<template>
    <a href="#" @click="con(i)"><img :src="data.pic" alt=""></a>
</template>

<script>
    export default {
        name: 'item',
        props:["data","i"],
        methods:{
            con(i){
                this.$emit("con",i)
            }
        }
    }
</script>


<style scoped>

</style>