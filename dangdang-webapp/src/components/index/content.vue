<template>
        <!--书-->
        <section class="book">
            <dd-index-content-shop :data="conent" @con="con" v-for="(conent, i) in data.conents" :key="i" :i="i"></dd-index-content-shop>
        </section>
</template>

<script>
    import item from "./cont/item"
    export default {
        name: 'scontent',
        components:{
            "dd-index-content-shop":item
        },
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