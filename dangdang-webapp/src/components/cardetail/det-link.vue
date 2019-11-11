<template>
    <div class="det-link">
        <p><img src="http://59.110.229.146/images/cardetail/robot_2.png">&nbsp;&nbsp;&nbsp;联系客服</p>
        <img src="http://59.110.229.146/images/cardetail/open.png" >
    </div>
</template>

<script>
    export default {
        name: "det-link"
    }
</script>

<style scoped>
.det-link{
    padding:0 0.11rem;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    font-size: 0.15rem;
    height: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 0.01rem solid gainsboro;
}
.det-link>img{
    height: 0.12rem;
    margin-top: 0.18rem;
}
.det-link>p>img{
    width: 0.2rem;
    height: 0.2rem;
    margin-top: 0.14rem;
}
.det-link>p{
    display: flex;
    justify-content: space-between;
    line-height: 0.5rem;
}
</style>
