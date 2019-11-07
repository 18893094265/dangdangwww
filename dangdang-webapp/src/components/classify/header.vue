<template>
    <header>
        <div>
            <img src="http://59.110.229.146/images/imgs2/arrow_left.png" alt="123">
        </div>
        <input type="text" :placeholder="data.input">
        <div>
            <img src="http://59.110.229.146/images/imgs2/menu.png" alt="123">
        </div>
        <span></span>
    </header>
</template>

<script>
    export default {
        name: 'vheader',
        props:["data"]
    }
</script>


<style scoped>

</style>