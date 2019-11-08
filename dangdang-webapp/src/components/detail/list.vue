<template>
    <section class="con">
        <dd-detail-list-item v-for="(list,z) in data" :key="z" :data="list">

        </dd-detail-list-item>
    </section>
</template>

<script>
    import listitem from "./list/listitem";
    export default {
        name: 'list',
        props:["data"],
        components:{
            "dd-detail-list-item":listitem
        }
    }
</script>


<style scoped>

</style>