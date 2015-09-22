app.factory('currentPage',[function(){
    return {
        page:'index',
        userData:{},
        loginState:{}
    };
}]).factory('history',[function(){
    return {
        back:function(){
            window.history.back()
        }
    };
}]).factory('user',[function(){
    return {
        data:'index'
    };
}]).factory('getHeight',[function(){
    return {
        banner:function(){
            if(document.documentElement.clientWidth>640){
                return {'height':'300px'}
            }else{
                var width = Math.floor(document.documentElement.clientWidth*0.46875)
                return {'height':width+'px'}
            }
        }
    };
}])


app.factory('messageFactory',['$rootScope','$timeout', function($rootScope,$timeout) {
    return function(o){
        var option = {
            time:2000,
            text:''
        };
        angular.extend(option,o);
        var time;
        var scope = $rootScope.$new();
        var elm = (function(){
            return document.getElementById('massage');
        }());
        var elmHtml = angular.element('<div class="massage" id="massage"><div class="massage-main">' + option.text + '</div></div>');
        if(!elm){
            angular.element(document.body).append(elmHtml[0]);
        }else{
            elm.getElementsByClassName('massage-main')[0].innerHTML = option.text;
        }
        clearTimeout(time);
        time = $timeout(function(){
            elm = null;
            scope.$destroy();
            elmHtml.remove();
            elmHtml = null;
        },option.time);
    }
}])

app.factory('ajaxData',[function(){
    return {
        listData:{
            "code": "success",
            "message": "执行成功！",
            "model": [
                {
                    // 前台商品ID
                    "id": 10003,
                    // 长评论内容，首页今日精选用
                    "longComment": "我是长长长评论:Meiji 明治 宝宝村蔬菜 卷心菜菠菜泥婴儿辅食 7个月以上宝宝 13.4克 Meiji 明治 宝宝村蔬菜 卷心菜菠菜泥婴儿辅食 7个月以上宝宝 13.4克",
                    // 商品标题
                    "title": "Meiji 明治 宝宝村蔬菜 卷心菜菠菜泥婴儿辅食 7个月以上宝宝 13.4克",
                    // 排序，从1开始
                    "order": 1,
                    // 商品状态，1, "已上架"；0, "待上架"；-1, "已下架"；-2, "已售罄"；-3, "已失效"
                    "status": 1,
                    // 后台商品列表，最多显示3个，价格从低到高排序
                    "items": [
                        {
                            "id": 10003, // 后台商品ID
                            "logoImage": "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/60/interlace/1/q/85", // 第三方平台LOGO图片
                            "price": "38.00", // 商品到手价
                            "platformName": "网易考拉海购", // 第三方平台名称
                            "originalPrice": "68.00", // 商品市场价
                            "order": 1, // 排序，从1开始
                            "cheapest": true, // 是否价格最低，只会有一个后台商品为true
                            "status": 1, // 商品状态，1, "已上架"；0, "待上架"；-1, "已下架"；-2, "已售罄"；-3, "已失效"
                            "outerItemId": 10003, // 第三方平台商品ID
                            "platformId": 10001, // 第三方平台ID
                            "discount": "5.6" // 折扣，5.6折。没有折扣，返回"10"
                        }
                    ],
                    "shortComment": "我是短评论，海蜇头值得你买", // 商品短评论，往期精选和主题馆用。
                    "subtitle": "本周销售之王", // 商品副标题，首页今日精选用。
                    // 商品图片
                    "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/640/interlace/1/q/85"
                },
                {
                    "id": 10004,
                    "longComment": "我是长长长评论:3件装 | Nutrilon 牛栏婴儿奶粉4段 800克 3件装 | Nutrilon 牛栏婴儿奶粉4段 800克",
                    "title": "3件装 | Nutrilon 牛栏婴儿奶粉4段 800克",
                    "order": 2,
                    "status": 1,
                    "items": [
                        {
                            "id": 10004,
                            "logoImage": "",
                            "price": "439.00",
                            "platformName": "网易考拉海购",
                            "originalPrice": "507.00",
                            "order": 1,
                            "cheapest": true,
                            "status": 1,
                            "outerItemId": 0,
                            "platformId": 10001,
                            "discount": "8.7"
                        }
                    ],
                    "shortComment": "我是短评论，海蜇头值得你买",
                    "subtitle": "本周销售之王",
                    "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_e4b024da-59d6-4f5e-96be-917d47796dfc.jpg?imageView2/2/w/640/interlace/1/q/85"
                },
                {
                    "id": 10005,
                    "longComment": "我是长长长评论:3件装 | Aptamil 德国爱他美 婴儿奶粉 2段 800克/罐 3件装 | Aptamil 德国爱他美 婴儿奶粉 2段 800克/罐",
                    "title": "3件装 | Aptamil 德国爱他美 婴儿奶粉 2段 800克/罐",
                    "order": 3,
                    "status": 1,
                    "items": [
                        {
                            "id": 10005,
                            "logoImage": "",
                            "price": "422.00",
                            "platformName": "网易考拉海购",
                            "originalPrice": "988.00",
                            "order": 1,
                            "cheapest": true,
                            "status": 1,
                            "outerItemId": 0,
                            "platformId": 10001,
                            "discount": "4.3"
                        }
                    ],
                    "shortComment": "我是短评论，海蜇头值得你买",
                    "subtitle": "本周销售之王",
                    "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_961a4c78-d37f-4a6f-bc7d-e8918ce8eb56.jpg?imageView2/2/w/640/interlace/1/q/85"
                }
            ]
        },
        ztg:{
            "code": "success",
            "message": "执行成功！",
            "model": [
                {
                    // 主题馆ID
                    "id": 10003,
                    // 主题馆名称
                    "name": "母婴",
                    // 图片馆图片
                    "image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/120/interlace/1/q/85",
                    // 首页主题馆显示样式。1, 普通；2, 宽横幅；3, 窄横幅。
                    "style":1,
                    // 排序，从1开始
                    "order": 1
                },
                {
                    "id": 10004,
                    "name": "保健品",
                    "image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/120/interlace/1/q/85",
                    "style":1,
                    "order": 1
                },
                {
                    "id": 10005,
                    "name": "面膜",
                    "image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/120/interlace/1/q/85",
                    "style":1,
                    "order": 1
                }
            ]
        },
        details:{
            "code": "success",
            "message": "执行成功！",
            "model":
            {
                // 前台商品ID
                "id": 10003,
                // 长评论内容，首页今日精选用
                "longComment": "我是长长长评论：Meiji 明治 宝宝村蔬菜 卷心菜菠菜泥婴儿辅食 7个月以上宝宝 13.4克 Meiji 明治 宝宝村蔬菜 卷心菜菠菜泥婴儿辅食 7个月以上宝宝 13.4克",
                // 商品标题
                "title": "Meiji 明治 宝宝村蔬菜 卷心菜菠菜泥婴儿辅食 7个月以上宝宝 13.4克",
                // 商品状态，1, "已上架"；0, "待上架"；-1, "已下架"；-2, "已售罄"；-3, "已失效"
                "status": 1,
                // 后台商品列表，最多显示3个，价格从低到高排序
                "items": [
                    {
                        "id": 10003, // 后台商品ID
                        // 第三方平台LOGO图片
                        "logoImage": "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/60/interlace/1/q/85",
                        "price": "38.00", // 商品到手价
                        "platformName": "网易考拉海购", // 第三方平台名称
                        "originalPrice": "68.00", // 商品市场价
                        "order": 1, // 排序，从1开始
                        "cheapest": true, // 是否价格最低，只会有一个后台商品为true
                        "status": 1, // 商品状态，1, "已上架"；0, "待上架"；-1, "已下架"；-2, "已售罄"；-3, "已失效"
                        "outerItemId": 10003, // 第三方平台商品ID
                        "platformId": 10001, // 第三方平台ID
                        "discount": "5.6", // 折扣，5.6折。没有折扣，返回"10"
                        "outerItemUrl": "http://m.kaola.com/product/10501.html", // 第三方平台商品链接
                        "quantity": 10, // 库存数量，0为售光
                        "volume": 100, // 商品累计销量
                        "commentNum": 100, // 评价数量
                        "commentStar": "97.5", // 好评比例
                        "freight": "5.50", // 运费
                        "tariff": "10.50", // 关税
                        "freightInfo": "免邮费", // 运费信息
                        "deliveryInfo": "预计2015年送达", // 送达信息
                        "tariffInfo": "税费 = 不含税价格 * 件数 * 商品税率 根据海关规定，本商品适用税率为 10%, 若订单总税额 ≤ 50元，海关予以免征。", // 关税信息
                        "discountInfo": ["金秋奶粉大放价", "加入购物车结算5元换购韩国杯面"], // 优惠信息
                        "supplierInfo": "网易考拉海购直营", // 供应商信息
                        "shipmentInfo": "澳大利亚直供 杭州保税仓发货" // 发货信息
                    },
                    {
                        "id": 10003,
                        "logoImage": "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/60/interlace/1/q/85",
                        "price": "38.00",
                        "platformName": "网易考拉海购",
                        "originalPrice": "68.00",
                        "order": 1,
                        "cheapest": true,
                        "status": 1,
                        "outerItemId": 10003,
                        "platformId": 10001,
                        "discount": "5.6",
                        "outerItemUrl": "http://m.kaola.com/product/10501.html",
                        "quantity": 10,
                        "volume": 100,
                        "commentNum": 100,
                        "commentStar": "97.5",
                        "freight": "5.50",
                        "tariff": "10.50",
                        "freightInfo": "免邮费",
                        "deliveryInfo": "预计2015年送达",
                        "tariffInfo": "税费 = 不含税价格 * 件数 * 商品税率 根据海关规定，本商品适用税率为 10%, 若订单总税额 ≤ 50元，海关予以免征。",
                        "discountInfo": ["金秋奶粉大放价", "加入购物车结算5元换购韩国杯面"],
                        "supplierInfo": "网易考拉海购直营",
                        "shipmentInfo": "澳大利亚直供 杭州保税仓发货"
                    },
                    {
                        "id": 10003,
                        "logoImage": "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/60/interlace/1/q/85",
                        "price": "38.00",
                        "platformName": "网易考拉海购",
                        "originalPrice": "68.00",
                        "order": 1,
                        "cheapest": true,
                        "status": 1,
                        "outerItemId": 10003,
                        "platformId": 10001,
                        "discount": "5.6",
                        "outerItemUrl": "http://m.kaola.com/product/10501.html",
                        "quantity": 10,
                        "volume": 100,
                        "commentNum": 100,
                        "commentStar": "97.5",
                        "freight": "5.50",
                        "tariff": "10.50",
                        "freightInfo": "免邮费",
                        "deliveryInfo": "预计2015年送达",
                        "tariffInfo": "税费 = 不含税价格 * 件数 * 商品税率 根据海关规定，本商品适用税率为 10%, 若订单总税额 ≤ 50元，海关予以免征。",
                        "discountInfo": ["金秋奶粉大放价", "加入购物车结算5元换购韩国杯面"],
                        "supplierInfo": "网易考拉海购直营",
                        "shipmentInfo": "澳大利亚直供 杭州保税仓发货"
                    }
                ],
                "shortComment": "我是短评论，海蜇头值得你买", // 商品短评论，往期精选和主题馆用。
                "subtitle": "本周销售之王", // 商品副标题，首页今日精选用。
                // 商品图片
                "images": [
                    "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/640/interlace/1/q/85",
                    "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/640/interlace/1/q/85",
                    "http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_235b8a75-a4b7-480b-90b6-90394204f781.jpg?imageView2/2/w/640/interlace/1/q/85"
                ],
                "description": "<p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_68e31a16-3d27-4167-8329-d7ded87b2b47.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_9e37f756-8667-4c91-bd50-0ec5968a265a.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_d7b9dbbc-eff8-4c58-94a2-461d3a9dbc55.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_05e6279d-1167-480b-aaf3-3105079f18fe.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_2db6e94b-2a32-4036-8681-a0ec99098a19.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_3752e514-3ea0-4334-a0bc-af832f5a2a23.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_d22b72c3-01e1-40de-8cce-2ef6ff80bde2.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_1650d57f-c303-4b13-8706-0cd0fb0c277c.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_95881b0c-56ec-4ec6-9a55-5d2124e81836.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_c7cfbb5c-9ee2-41bb-a7c1-1e26308f9ab1.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_7539afe6-2066-4b50-b580-6621d52010e3.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_da9a01a4-ec39-4da5-855c-1d2f196f2773.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_f9333560-333a-42c9-8fcf-58b597f4da07.jpg\" style=\"\"></p><p style=\"text-align: center\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_409e818f-72ef-4a73-a8a4-04e4d991bf6a.jpg\" style=\"\"></p><p><br></p>",
                "properties":[{"商品品牌":"Nutrilon 荷兰牛栏"},{"采购地":"荷兰"}]
            }
        }
    };
}]);

