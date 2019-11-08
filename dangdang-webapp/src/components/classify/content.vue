<template>
    <main class="classify-main">
        <section class="classify-left">
            <div>
                <dd-classify-con-left :key="i" v-for="(left,i) in data.lefts" :left="left" :i="i"></dd-classify-con-left>
            </div>
        </section>
        <dd-classify-con-right :data="data.right">

        </dd-classify-con-right>
    </main>
</template>

<script>
    import left from "./cons/left"
    import right from "./cons/right"
    export default {
        name: 'contents',
        components:{
            "dd-classify-con-left":left,
            "dd-classify-con-right":right
        },
        props:["data"]
    }
</script>


<style scoped>

</style>