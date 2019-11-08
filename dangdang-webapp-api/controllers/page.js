var express = require('express');
var router = express.Router();
const cartInfo = require("../models/cartInfo");
const classifyInfo = require("../models/classifyInfo");
const indexInfo = require("../models/indexInfo");
const buyingInfo = require("../models/buyingInfo");
const myInfo = require("../models/myInfo");
const detailInfo =require("../models/detailInfo");

//解决跨域问题
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header("Access-Coantrol-Allow-Headers","X-Requested-With");
    res.header('Access-Control-Allow-Headers','Content-Type');
    if(req.method=="OPTIONS") res.send(200);
    else next();
})

/* GET home page. */
router.get('/cartinfo', function(req, res, next) {
    res.jsonp(cartInfo.getCartInfo());
});

router.get('/classifyinfo', function(req, res, next) {
    res.jsonp(classifyInfo.getclassifyInfo());
});

router.get('/indexinfo', function(req, res, next) {
    res.jsonp(indexInfo.getIndexInfo());
});

router.get('/buyinginfo', function(req, res, next) {
    res.jsonp(buyingInfo.getBuyingInfo());
});

router.get("/myinfo",function (req,res,next) {
    res.jsonp(myInfo.getMyInfo());
});

router.get("/detailinfo",function (req,res,next) {
    res.jsonp(detailInfo.getDetailInfo());
});

module.exports = router;