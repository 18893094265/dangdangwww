<template>
    <section class="foot">
        <p><span>更多</span></p>
        <div class="foot1">
            <div class="foots">
                <dd-buying-mins-minsitem v-for="(mins,z) in data" :key="z" :data="mins"></dd-buying-mins-minsitem>
            </div>
        </div>
    </section>
</template>

<script>
    import minsitem from "../../components/buying/mins/minsitem"

    export default {
        name: 'mins',
        components:{
            "dd-buying-mins-minsitem":minsitem,
        },
        props:["data"]
    }
</script>


<style scoped>

</style>