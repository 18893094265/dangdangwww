module.exports = {
    getCartInfo(){
        let cartInfos =
            {
                "shops":[
                    {
                        "checked":true,
                        "pic":"url(http://59.110.229.146/images/imgs4/dangdang.png)",
                        "shopName":"当当网",
                        "goods":"已免运费",
                        "products":[
                            {
                                "title":"人性的弱点（权威译本）",
                                "pic":"http://59.110.229.146/images/imgs4/23562339-1_4.jpg",
                                "yprice":"￥39.80",
                                "price":19.10,
                                "con":"限时抢",
                                "checked":true
                            },
                            {
                                "title":"孙子兵法--中华经典藏书（平装）",
                                "pic":"http://59.110.229.146/images/imgs4/23691198-1_8.jpg",
                                "yprice":"￥35.00",
                                "price":16.80,
                                "con":"秒杀",
                                "checked":true
                            }
                        ]
                    },
                    {
                        "checked":true,
                        "pic":"url(http://59.110.229.146/images/imgs4/dangdang.png)",
                        "shopName":"棍棍网",
                        "goods":"",
                        "products":[
                            {
                                "title":"鬼谷子—————中华经典藏书（精装双色插图版）",
                                "pic":"http://59.110.229.146/images/imgs4/23691200-1_10.jpg",
                                "yprice":"￥58.00",
                                "price":27.90,
                                "con":"秒杀",
                                "checked":true
                            },
                            {
                                "title":"孙子兵法--中华经典藏书12（平装）",
                                "pic":"http://59.110.229.146/images/imgs4/23691200-1_10.jpg",
                                "yprice":"￥35.00",
                                "price":16.80,
                                "con":"秒杀",
                                "checked":true
                            }
                        ]
                    }
                ],
                "carfooter":
                    {
                        "checked1":true,
                        "totalcost1":0.00,
                        "num":0
                    }
            };

        return cartInfos
    }
};
