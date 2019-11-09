<template>
    <div>
        <div class="login-main2">
                <input type="text" placeholder="请输入手机号/邮箱/昵称">
        </div>
        <div class="login-main3">
            <input type="password" placeholder="请输入密码">
            <span></span>
        </div>
        <div class="login-main4">
            <p>请点击图片旋转至正确方向<span>换一组</span></p>
            <span></span><span></span><span></span><span></span>
        </div>
        <div class="login-main5">
            <div>
                <img src="" alt=""><img src="" alt=""><img src="" alt=""><img src="" alt="">
            </div>
            <a href="#">登录</a>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"
    export default {
        name: 'loginheader',
        mounted() {
            $(".login-main4>span").click(function () {
                const size = 0.6;
                let ss = parseInt($(this).css("backgroundPositionY"));
                if(ss<=-180){
                    $(this).css({
                        "backgroundPositionY": 0
                    })
                }else{
                    $(this).css({
                        "backgroundPositionY": ss - size*100
                    })
                }
            })
            $(".login-main4>p>span").click(function () {
                if($(".login-main4>span").hasClass("span-login1")){
                    $(".login-main4>span").removeClass("span-login1");
                }else{
                    $(".login-main4>span").addClass("span-login1");
                }
            })
        }
    }
</script>

<style scoped>

</style>