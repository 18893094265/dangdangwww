<template>
    <header>
        <div class="go">
            <img src="http://59.110.229.146/images/imgs2/arrow_left.png" alt="123">
        </div>
        <input type="text" :placeholder="data.vinput">
        <div>
            <img src="http://59.110.229.146/images/imgs2/menu.png" alt="123">
        </div>
        <span></span>
    </header>
</template>

<script>
    import $ from "jquery"
    export default {
        name: 'vheader',
        props:["data"],
        mounted() {
            $(".go").click(function () {
                window.history.go(-1)
            })
        }
    }
</script>


<style scoped>

</style>