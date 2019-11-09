<template>
    <header class="deheader">
        <div>
            <img src="http://59.110.229.146/images/imgs2/arrow_left.png" alt="">
        </div>
        <p>{{data.text}}</p>
        <div>
            <img src="http://59.110.229.146/images/imgs2/menu.png" alt="">
        </div>
    </header>
</template>

<script>
    import $ from "jquery"
    export default {
        name: 'vheader',
        props:["data"],
        mounted() {
            $(".deheader>div:nth-child(1)").click(function () {
                window.history.go(-1);
            });
            $(".deheader>div:nth-child(3)").click(()=>{

            })
        }
    }
</script>


<style scoped>

</style>