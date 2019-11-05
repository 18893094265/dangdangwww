var express = require('express');
var router = express.Router();
const indexInfo = require("../models/indexInfo");

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
router.get('/indexInfo', function(req, res, next) {
    res.jsonp(indexInfo.getIndexInfo());
});

module.exports = router;