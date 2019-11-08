<template>
    <div class="login-main">
        <div class="login-main1">
            <a href="">账号密码登录</a>
            <a href="">短信快捷登录</a>
        </div>
        <div class="login-main2">
            <input type="text" placeholder="请输入手机号/邮箱/昵称">
        </div>
        <div class="login-main3">
            <input type="password" placeholder="请输入密码">
        </div>
        <div class="login-main4">
            <p>请点击图片旋转至正确方向<span>换一组</span></p>
        </div>
        <div class="login-main5">
            <div>
                <img src="" alt=""><img src="" alt=""><img src="" alt=""><img src="" alt="">
            </div>
            <a href="#">登录</a>
        </div>
        <p class="login-p1"><a href="#">忘记密码？</a><a href="#">立即注册</a></p>
        <div class="login-main6">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <a href="">安全问题|</a><span>登录代表你已同意<a href="">《当当隐私政策》</a></span>
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