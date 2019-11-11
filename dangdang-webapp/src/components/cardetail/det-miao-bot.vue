<template>
<div class="det-desc">
    <p>{{desc}}</p>
    <div><p>￥{{price}} <span>￥{{pricz}}</span></p><span>{{no}}</span></div>
</div>
</template>

<script>
    export default {
        name: "det-miao-bot",
        data(){
            return{
                desc:"红星照耀中国 八年级上 人教版名著阅读课程化丛书 教育部统编教材推荐必读书目 人民教育出版社",
                price:17.4,
                pricz:49.8,
                no:"不可用优惠券"
            }
        }
    }
</script>

<style scoped>
.det-desc{
    font-size: 0.15rem;
    color: dimgray;
    background-color: white;
    padding: 0.1rem;
    box-sizing: border-box;
    margin-top: 0.3rem;
}
.det-desc>p{
    width: 88%;
}
.det-desc>div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.15rem;
}
.det-desc>div span{
    color: darkgray;
    font-size: 0.13rem;
}
.det-desc>div span:nth-child(1){
    text-decoration: line-through;
    font-weight: 200;
}
.det-desc>div span:nth-child(2){
    padding-top: 0.1rem;
}
.det-desc>div>p{
    color: red;
    font-weight: bold;
    font-size: 0.25rem;
}
</style>
