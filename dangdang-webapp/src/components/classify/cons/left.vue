<template>
    <a class="classify-al" href="#" @click="change(i)">{{left.text}}</a>
</template>

<script>
    import $ from "jquery"
    export default {
        name: 'vleft',
        props:["left","i"],
        mounted() {
            $(".classify-al").click(()=>{
                $(this).css({
                    "backgroundColor":"red"
                }).siblings().css({
                    "backgroundColor":"blue"
                })
            })
        },
        methods: {
            change(i) {
                this.$bus.$emit("change", i);
            }
        }
    }
</script>

<style scoped>

</style>