<template>
    <div>
        <header class="deheader">
            <div>
                <img src="http://59.110.229.146/images/imgs2/arrow_left.png" alt="">
            </div>
            <p>{{data.text}}</p>
            <div>
                <img src="http://59.110.229.146/images/imgs2/menu.png" alt="">
            </div>
        </header>
        <div class="hide hide1">
            <a href="#/main/index"><img src="http://59.110.229.146/images/main/icon_03_in-1536891748.png" alt=""></a>
            <a href="#/main/classify"><img src="http://59.110.229.146/images/imgs1/feilei-8-2.png" alt=""></a>
            <a href="#/main/buying"><img src="http://59.110.229.146/images/main/ic_buy_normal-1537519625.png" alt=""></a>
            <a href="#/main/car"><img src="http://59.110.229.146/images/imgs1/guowuche-8-2.png" alt=""></a>
            <a href="#/main/my"><img src="http://59.110.229.146/images/imgs1/wodedangdang---4.png" alt=""></a>
        </div>
    </div>
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
                if($(".hide").hasClass("hide1")){
                    $(".hide").removeClass("hide1");
                }else{
                    $(".hide").addClass("hide1");
                }
            })
        }
    }
</script>


<style scoped>
    .hide{
        padding-top:0.5rem;
        box-sizing: border-box;
        height:0.4rem;
        font-size: 0.1rem;
        display: flex;
        justify-content: space-between;
    }
    .hide>a{
        display: inline-block;
        width:13%;
        height:0.4rem;
        padding: 0.05rem 0 0 0.25rem;
    }
    .hide>a>img{
        width:0.3rem;
        height:0.3rem;
    }
    .hide1{
        display: none;
    }
</style>