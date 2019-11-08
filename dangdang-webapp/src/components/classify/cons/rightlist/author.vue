<template>
    <div class="div3">
        <div class="div3-top">
            <div>{{data.text1}}&nbsp;<img src="http://59.110.229.146/images/imgs2/ddcategory_title_link_icon.png"/></div>
            <div>{{data.text2}}&nbsp;<img src="http://59.110.229.146/images/imgs2/ddcategory_more_icon.png"/></div>
        </div>
        <div class="div3-btm">
            <div>
                <a href="#">{{data.text3}}</a><i>|</i><a href="#">{{data.text4}}</a><i>|</i><a href="#">{{data.text5}}</a>
            </div>
            <div>
                <a href="#">{{data.text6}}</a><i>|</i><a id="ch" href="#">{{data.text7}}</a><i>|</i><a class="zk" href="#">{{data.text8}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'author',
        props:["data"]
    }
</script>


<style scoped>

</style>