<template>
    <section class="mydiv1">
        <dd-my-nav-navitem v-for="(nav,i) in data" :key="i" :data="nav">

        </dd-my-nav-navitem>
    </section>
</template>

<script>
    import navitem from "./nav/navitem"
    export default {
        name: 'vnav',
        components:{
            "dd-my-nav-navitem":navitem
        },
        props:["data"]
    }
</script>


<style scoped>

</style>