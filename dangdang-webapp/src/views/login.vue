<template>
    <div>
        <dd-login-header v-if="loginInfo.header" :data="loginInfo.header"></dd-login-header>
        <dd-login-loginmain>

        </dd-login-loginmain>
    </div>
</template>

<script>
    import $ from "jquery"
    import loginApi from "../apis/loginapi"
    import header from "../components/login/vheader"
    import loginmain from "../components/common/vmain"
    export default {
        name: 'car',
        components: {
            "dd-login-loginmain": loginmain,
            "dd-login-header": header
        },
        data() {
            return {
                loginInfo: [],
            }
        },
        methods: {
            _initPageData() {
                loginApi.getLoginInfo(data => {
                    this.loginInfo = data;
                    // console.log(data)
                });
            }
        },
        beforeMount(){
            this._initPageData()
        },
        mounted() {
            $(".login-main3>span").click(function () {
                if($(this).hasClass("span-login")){
                    $(this).removeClass("span-login")
                    $(".login-main3>input").attr("type","password")
                }else{
                    $(this).addClass("span-login");
                    $(".login-main3>input").attr("type","text")
                }
            })

            $(".login-main1>a:nth-of-type(1)").click(function () {
                $(this).css({
                    "border-bottom":"0.02rem solid black"
                })
                $(".login-main1>a:nth-of-type(2)").css({
                    "border-bottom":"none"
                })
            })

            $(".login-main1>a:nth-of-type(2)").click(function () {
                $(this).css({
                    "border-bottom":"0.02rem solid black"
                })
                $(".login-main1>a:nth-of-type(1)").css({
                    "border-bottom":"none"
                })
            })
        }
    }
</script>

<style scoped>
    @import "../assets/login/login.css";
</style>