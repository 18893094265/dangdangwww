<template>
    <div class="login-main">
        <div class="login-main1">
            <a href="#/login/login1">账号密码登录</a>
            <a href="#/login/login2">短信快捷登录</a>
        </div>
        <router-view></router-view>
        <p class="login-p1"><a href="#">忘记密码？</a><a href="#">立即注册</a></p>
        <div class="login-main6">
            <ul>
                <li><a href="#"><img src="../../assets/images/login/qq.png" alt=""></a></li>
                <li><a href="#"><img src="../../assets/images/login/wb.png" alt=""></a></li>
                <li><a href="#"><img src="../../assets/images/login/zfb.png" alt=""></a></li>
            </ul>
            <a href="">安全问题 | </a><span>登录代表你已同意<a href="">《当当隐私政策》</a></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loginmain',
    }
</script>

<style scoped>
    @import "../../assets/login/login.css";
</style>