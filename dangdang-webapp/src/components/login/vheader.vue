<template>
    <dd-login-header-it :data="data"></dd-login-header-it>
</template>

<script>
    import header from "../common/header"
    export default {
        name: 'loginheader',
        components:{
            "dd-login-header-it":header
        },
        props:["data"]
    }
</script>

<style scoped>

</style>