<template>
    <main>
        <dd-classify-con-left>

        </dd-classify-con-left>

        <dd-classify-con-right>

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
        }
    }
</script>


<style scoped>

</style>