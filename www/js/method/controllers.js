/* 首页控制器 */
app.controller('mainController', [ '$scope', '$state', 'currentPage', function($scope, $state, currentPage) {
	$scope.page = currentPage;
}]);

/*
*	首页控制器
* */
app.controller('indexCont', [ '$scope', '$state','$http', 'currentPage', 'getHeight', 'service', function($scope, $state,$http, currentPage, getHeight, service) {
	currentPage.page = 'index';

    $scope.bannerHeight = getHeight.banner()

    // banner 数据
    service.getMethod('/home_content.html',function(data){

		//console.log('banner 数据')
		//console.log(JSON.stringify(data.model.topBanners))
		if(!data.model.topBanners.length){
			console.log('banner 数据 error')
			data.model.topBanners = [{"title":"","order":1,"image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/top_banner_1.png","url":""}]
		}
		$scope.topBanners = data.model.topBanners;
    },{type : 0});


	/*
	*	今日精选
	* */
	service.getMethod('/view_items.html?type=1',function(data){
		//console.log('今日精选')
		//console.log(JSON.stringify(data))
		if(!data.model){
			console.log('今日精选 error')
			var data = {"code":"success","message":"执行成功！","model":{"topic":0,"items":[{"id":181,"longComment":"温柔呵护宝宝娇嫩的肌肤，凹凸透气柔点网层，透气性更出色，小屁屁更干爽舒适。棉柔弹性环抱腰围，舒适服贴腹部；裆下柔韧设计，更服贴大腿根部，还有棉柔魔术重复贴等贴心设计。","title":"Merries 花王纸尿裤 M64片/包 2包装","flag":1,"order":1,"status":1,"items":[{"id":10058,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"226","platformName":"洋码头","originalPrice":"460","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"d3bdd26e-77b1-4a6c-a7e4-89bdfefb18a1","salePrice":"226","platformId":10004,"discount":"5"},{"id":10057,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"236","platformName":"网易考拉海购","originalPrice":"359","order":2,"logoImageRatio":"1.8","cheapest":false,"status":-1,"outerItemId":"5122","salePrice":"236","platformId":10001,"discount":"6.6"},{"id":10059,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"239","platformName":"聚美优品","originalPrice":"340","order":3,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht141111p1414749t2","salePrice":"239","platformId":10002,"discount":"7.1"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"超薄、超透气、超吸水","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_cbf50a1e-ead5-4b51-b73d-fae76f835f13.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":182,"longComment":"特含LCP(长链不饱和脂肪酸，包含DHA和ARA等)，支持宝宝脑部和视力发育；富含维生素A、C、D，维生素C可促进铁的吸收，维生素D可促进钙的吸收，支持宝宝营养均衡；特含专利配比益生元组合，搭配铁和锌，有助增强宝宝抵抗力","title":"Aptamil 德国爱他美 婴儿奶粉 2段  3罐装","flag":1,"order":2,"status":1,"items":[{"id":10005,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"422","platformName":"网易考拉海购","originalPrice":"988","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"5895","salePrice":"422","platformId":10001,"discount":"4.3"},{"id":10060,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"449","platformName":"聚美优品","originalPrice":"780","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht150918p1477560t2","salePrice":"449","platformId":10002,"discount":"5.8"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"40年研究的营养配方","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_cec287cb-b506-425b-9da6-e8501a0d740e.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":183,"longComment":"独特晚安配安，甄选符合欧盟标准的优质原料。天然有机小麦、有机大米，自然浓郁奶香，清新苹果口味遇上香滑的燕麦粉，给宝宝带来美好的配餐体验。富含维生素B1，促进宝宝大脑和身体发育，满足宝宝日常所需营养，让宝宝吃得健康，活力满满。","title":"HiPP 喜宝 有机苹果谷物燕麦晚安米粉 500克 8个月辅食","flag":1,"order":3,"status":1,"items":[{"id":10061,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"55","platformName":"聚美优品","originalPrice":"118","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"ht150914p1536129t2","salePrice":"55","platformId":10002,"discount":"4.7"},{"id":10062,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"65","platformName":"网易考拉海购","originalPrice":"79","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"6897","salePrice":"65","platformId":10001,"discount":"8.3"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"帮助宝宝睡个好觉","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_226a9d9c-7ccc-4c03-a8de-16668e1e1c48.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":184,"longComment":"全新设计的flexible tip柔软弹性探头尤其适合婴幼儿柔嬾的耳道，背部显示屏更加贴心直观，特别的预热功能保证测量的准确性，exactemp技术配合回馈系统可实现灯光和声音双提示测量结果。轻盈的蜂鸣声提示正确的测量位置；宝宝再也不怕测体温了！","title":"BRAUN 博朗 儿童耳温计红外线耳温枪 IRT6500","flag":1,"order":4,"status":1,"items":[{"id":10064,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"273","platformName":"洋码头","originalPrice":"399","order":1,"logoImageRatio":"1.8","cheapest":true,"status":-2,"outerItemId":"b3e058f1-dec6-4d6f-a898-d58e0631e5b8","salePrice":"273","platformId":10004,"discount":"6.9"},{"id":10065,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"329","platformName":"网易考拉海购","originalPrice":"576","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"4758","salePrice":"329","platformId":10001,"discount":"5.8"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"一秒准确测体温","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_b1ea2098-bbbe-40c9-a1bb-d3a7a2d032f6.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":185,"longComment":"采用阿尔卑斯冰河水，富含透明质酸，超薄服帖，用完脸上滑滑的，天然保湿因子能够起到搞笑补水锁水功效，不含人工色素，很水润，超薄更服帖肌肤，更易精华吸收，改善面部暗沉干燥等问题，用过的妹子都找到了真爱","title":"MEDIHEAL 可莱丝 N.M.F针剂水库保湿面膜 10片/盒","flag":1,"order":5,"status":1,"items":[{"id":10066,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"79.90","platformName":"网易考拉海购","originalPrice":"169","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"5044","salePrice":"79.90","platformId":10001,"discount":"4.8"},{"id":10068,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"89","platformName":"洋码头","originalPrice":"168","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"e0d377cd-3e11-43fb-9e57-b59e49c7a1d1","salePrice":"89","platformId":10004,"discount":"5.3"},{"id":10067,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"109","platformName":"聚美优品","originalPrice":"179","order":3,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht150604p1293263t2","salePrice":"109","platformId":10002,"discount":"6.1"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"全面补水神器","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_0e8bff41-834d-4648-89ca-226e5d3a3286.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":187,"longComment":"女人我最大推荐的身体美白神器，主要成份含珍珠粉、玻尿酸、澳洲胡桃油，不含荧光剂和铅汞，所以涂抹上去比较自然的白，每天坚持涂抹，可以慢慢从肌肤底层变白，天生不白，只能靠后期努力了","title":"emma1997 美白美体匀嫩霜身体乳 180毫升","flag":1,"order":6,"status":1,"items":[{"id":10071,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"98","platformName":"网易考拉海购","originalPrice":"198","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"7032","salePrice":"98","platformId":10001,"discount":"5"},{"id":10072,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"128","platformName":"洋码头","originalPrice":"","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"a040567d-2960-426e-9b57-3a12dc33ac19","salePrice":"128","platformId":10004,"discount":"10"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"初秋让身体白回来","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_9e0674a5-de39-4353-b985-c45778fafa6e.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":188,"longComment":"这款日本无硅马油洗发水可以加速毛囊新陈代谢，防脱发，孕妇儿童都可以用，同时味道很清新，洗完以后头发很蓬松，有效改善因吹染整烫发质受损，也是日本温泉长期销售量最高的产品之一","title":"KUMANO COSMETICS 熊野油脂 无硅弱酸性马油洗发水","flag":1,"order":7,"status":1,"items":[{"id":10074,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"58","platformName":"洋码头","originalPrice":"136","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"729d1d86-822b-49f2-b7e5-fb8c5dbdcddd","salePrice":"58","platformId":10004,"discount":"4.3"},{"id":10073,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"59","platformName":"网易考拉海购","originalPrice":"129","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"5354","salePrice":"59","platformId":10001,"discount":"4.6"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"脱发救星的鼻祖","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_fcd31021-f6d4-4e98-b40a-67fff357a98c.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":189,"longComment":"此款唇膏不含任何香料，用后感觉闪闪的、亮亮的、没有任何厚重感，同时不粘腻，网络美女推荐人热卖品，晚上睡前可以涂抹厚厚一层，早上起来，嘴巴粉嫩嘟嘟，唇部容易干燥且经常化妆的萌妹子必选","title":"2件组合装 | DHC 蝶翠诗 纯榄润唇膏1.5克/支 2支","flag":1,"order":8,"status":1,"items":[{"id":10077,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"79","platformName":"洋码头","originalPrice":"192","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"cf50a989-2dee-421b-80b8-11133d766339","salePrice":"79","platformId":10004,"discount":"4.2"},{"id":10075,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"85","platformName":"网易考拉海购","originalPrice":"138","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"9970","salePrice":"85","platformId":10001,"discount":"6.2"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"口红界打底达人","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_53ca2b0a-34d8-4a92-bf06-1b77bbe95141.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":190,"longComment":"Devondale德运来自澳大利亚天然牧场，隶属于澳洲最大的乳制品厂商MG，专注乳制品64年。德运高钙脱脂奶粉，口感纯正，100%天然牛奶，不含任何食品添加剂和防腐剂，富含钙质和蛋白质，是学生、白领及高品质健康人士的最佳选择，长期饮用可代餐纤体、嫩白养颜。连澳洲总理都惊呼好喝的奶粉，80%澳洲人天天饮用的奶粉。一杯好奶，一天正能量的开始","title":"Devondale 德运 高钙全脂成人牛奶粉 1000克/袋","flag":1,"order":9,"status":1,"items":[{"id":10011,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"79","platformName":"网易考拉海购","originalPrice":"159","order":1,"logoImageRatio":"1.8","cheapest":true,"status":-1,"outerItemId":"4617","salePrice":"79","platformId":10001,"discount":"5"},{"id":10078,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"89","platformName":"聚美优品","originalPrice":"159","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht150917p1497204t1","salePrice":"89","platformId":10002,"discount":"5.6"},{"id":10079,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"139","platformName":"洋码头","originalPrice":"","order":3,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"340aeefa-6048-4f2a-98d3-614e99181b9d","salePrice":"139","platformId":10004,"discount":"10"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"牛奶界的液体黄金","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_870eb35c-be38-4179-9bdc-58d0b3bfd79e.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":191,"longComment":"韩国药妆动物面膜，使用天然纸浆，可可螺母水的构树，桑白皮萃取物增大肌肤的保护力度，烟酸的成份让肌肤美白更透亮，敏感肌也能适用，主攻美白，同时也补水，使用后脸部凉丝丝，明星安以轩、袁咏仪、李晨、贾乃亮等同款推荐","title":"10片组合装 | SNP 熊猫美白补水动物面膜贴10片/盒","flag":1,"order":10,"status":1,"items":[{"id":10082,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"85","platformName":"洋码头","originalPrice":"160","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"051593e5-b20b-4e74-a0a1-f540b6f7b2fd","salePrice":"85","platformId":10004,"discount":"5.4"},{"id":10080,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"86","platformName":"网易考拉海购","originalPrice":"199","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"5395","salePrice":"86","platformId":10001,"discount":"4.4"},{"id":10081,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"89","platformName":"聚美优品","originalPrice":"159","order":3,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht150911p1549654t2","salePrice":"89","platformId":10002,"discount":"5.6"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"有趣好玩的面膜","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_47bf57a3-26a0-43bc-bb76-9881cab9d590.jpg?imageView2/2/w/750/interlace/1/q/85"}],"type":1,"imageRatio":"2.14","topicName":""}}
		}
		$scope.hotProduct = data.model;
	});

	/*
	* 	首页模块 - 主题馆
	* */
	service.getMethod('/topic_list.html?type=1',function(data){

		if(!data.model) {
			console.log('主题馆 error')
			var data = { "code": "success", "message": "执行成功！", "model": [{ "id": 1001, "style": 1, "order": 1, "name": "宝宝奶粉", "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/home_cat_1001.png", "imageRatio": "0.91"}, { "id": 1002, "style": 1, "order": 2, "name": "纸尿裤", "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/home_cat_1002.png", "imageRatio": "0.91"}, { "id": 1003, "style": 2, "order": 3, "name": "母婴专区", "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/home_cat_1003.png", "imageRatio": "1.93"}, { "id": 1004, "style": 1, "order": 4, "name": "营养保健", "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/home_cat_1004.png", "imageRatio": "0.91"}, { "id": 1005, "style": 1, "order": 5, "name": "进口食品", "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/home_cat_1005.png", "imageRatio": "0.91"}, { "id": 1006, "style": 3, "order": 6, "name": "美容彩妆", "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/home_cat_1006.png", "imageRatio": "3.43"}, { "id": 1007, "style": 3, "order": 7, "name": "补水面膜", "image": "http://7xlj2z.com2.z0.glb.qiniucdn.com/home_cat_1007.png", "imageRatio": "3.43"}], "imageRatio": "3.57"}
		}
		$scope.themePavilion = data.model;
	});

	/*
	*	往期精选
	* */

	service.getMethod('/view_items.html?type=2',function(data){
		if(!data.model){
			console.log('往期精选 error')
			var data = {"code":"success","message":"执行成功！","model":{"topic":0,"items":[{"id":181,"longComment":"温柔呵护宝宝娇嫩的肌肤，凹凸透气柔点网层，透气性更出色，小屁屁更干爽舒适。棉柔弹性环抱腰围，舒适服贴腹部；裆下柔韧设计，更服贴大腿根部，还有棉柔魔术重复贴等贴心设计。","title":"Merries 花王纸尿裤 M64片/包 2包装","flag":1,"order":1,"status":1,"items":[{"id":10058,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"226","platformName":"洋码头","originalPrice":"460","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"d3bdd26e-77b1-4a6c-a7e4-89bdfefb18a1","salePrice":"226","platformId":10004,"discount":"5"},{"id":10057,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"236","platformName":"网易考拉海购","originalPrice":"359","order":2,"logoImageRatio":"1.8","cheapest":false,"status":-1,"outerItemId":"5122","salePrice":"236","platformId":10001,"discount":"6.6"},{"id":10059,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"239","platformName":"聚美优品","originalPrice":"340","order":3,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht141111p1414749t2","salePrice":"239","platformId":10002,"discount":"7.1"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"超薄、超透气、超吸水","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_cbf50a1e-ead5-4b51-b73d-fae76f835f13.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":182,"longComment":"特含LCP(长链不饱和脂肪酸，包含DHA和ARA等)，支持宝宝脑部和视力发育；富含维生素A、C、D，维生素C可促进铁的吸收，维生素D可促进钙的吸收，支持宝宝营养均衡；特含专利配比益生元组合，搭配铁和锌，有助增强宝宝抵抗力","title":"Aptamil 德国爱他美 婴儿奶粉 2段  3罐装","flag":1,"order":2,"status":1,"items":[{"id":10005,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"422","platformName":"网易考拉海购","originalPrice":"988","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"5895","salePrice":"422","platformId":10001,"discount":"4.3"},{"id":10060,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"449","platformName":"聚美优品","originalPrice":"780","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht150918p1477560t2","salePrice":"449","platformId":10002,"discount":"5.8"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"40年研究的营养配方","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_cec287cb-b506-425b-9da6-e8501a0d740e.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":183,"longComment":"独特晚安配安，甄选符合欧盟标准的优质原料。天然有机小麦、有机大米，自然浓郁奶香，清新苹果口味遇上香滑的燕麦粉，给宝宝带来美好的配餐体验。富含维生素B1，促进宝宝大脑和身体发育，满足宝宝日常所需营养，让宝宝吃得健康，活力满满。","title":"HiPP 喜宝 有机苹果谷物燕麦晚安米粉 500克 8个月辅食","flag":1,"order":3,"status":1,"items":[{"id":10061,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"55","platformName":"聚美优品","originalPrice":"118","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"ht150914p1536129t2","salePrice":"55","platformId":10002,"discount":"4.7"},{"id":10062,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"65","platformName":"网易考拉海购","originalPrice":"79","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"6897","salePrice":"65","platformId":10001,"discount":"8.3"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"帮助宝宝睡个好觉","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_226a9d9c-7ccc-4c03-a8de-16668e1e1c48.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":184,"longComment":"全新设计的flexible tip柔软弹性探头尤其适合婴幼儿柔嬾的耳道，背部显示屏更加贴心直观，特别的预热功能保证测量的准确性，exactemp技术配合回馈系统可实现灯光和声音双提示测量结果。轻盈的蜂鸣声提示正确的测量位置；宝宝再也不怕测体温了！","title":"BRAUN 博朗 儿童耳温计红外线耳温枪 IRT6500","flag":1,"order":4,"status":1,"items":[{"id":10064,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"273","platformName":"洋码头","originalPrice":"399","order":1,"logoImageRatio":"1.8","cheapest":true,"status":-2,"outerItemId":"b3e058f1-dec6-4d6f-a898-d58e0631e5b8","salePrice":"273","platformId":10004,"discount":"6.9"},{"id":10065,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"329","platformName":"网易考拉海购","originalPrice":"576","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"4758","salePrice":"329","platformId":10001,"discount":"5.8"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"一秒准确测体温","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_b1ea2098-bbbe-40c9-a1bb-d3a7a2d032f6.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":185,"longComment":"采用阿尔卑斯冰河水，富含透明质酸，超薄服帖，用完脸上滑滑的，天然保湿因子能够起到搞笑补水锁水功效，不含人工色素，很水润，超薄更服帖肌肤，更易精华吸收，改善面部暗沉干燥等问题，用过的妹子都找到了真爱","title":"MEDIHEAL 可莱丝 N.M.F针剂水库保湿面膜 10片/盒","flag":1,"order":5,"status":1,"items":[{"id":10066,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"79.90","platformName":"网易考拉海购","originalPrice":"169","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"5044","salePrice":"79.90","platformId":10001,"discount":"4.8"},{"id":10068,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"89","platformName":"洋码头","originalPrice":"168","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"e0d377cd-3e11-43fb-9e57-b59e49c7a1d1","salePrice":"89","platformId":10004,"discount":"5.3"},{"id":10067,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"109","platformName":"聚美优品","originalPrice":"179","order":3,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht150604p1293263t2","salePrice":"109","platformId":10002,"discount":"6.1"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"全面补水神器","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_0e8bff41-834d-4648-89ca-226e5d3a3286.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":187,"longComment":"女人我最大推荐的身体美白神器，主要成份含珍珠粉、玻尿酸、澳洲胡桃油，不含荧光剂和铅汞，所以涂抹上去比较自然的白，每天坚持涂抹，可以慢慢从肌肤底层变白，天生不白，只能靠后期努力了","title":"emma1997 美白美体匀嫩霜身体乳 180毫升","flag":1,"order":6,"status":1,"items":[{"id":10071,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"98","platformName":"网易考拉海购","originalPrice":"198","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"7032","salePrice":"98","platformId":10001,"discount":"5"},{"id":10072,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"128","platformName":"洋码头","originalPrice":"","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"a040567d-2960-426e-9b57-3a12dc33ac19","salePrice":"128","platformId":10004,"discount":"10"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"初秋让身体白回来","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_9e0674a5-de39-4353-b985-c45778fafa6e.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":188,"longComment":"这款日本无硅马油洗发水可以加速毛囊新陈代谢，防脱发，孕妇儿童都可以用，同时味道很清新，洗完以后头发很蓬松，有效改善因吹染整烫发质受损，也是日本温泉长期销售量最高的产品之一","title":"KUMANO COSMETICS 熊野油脂 无硅弱酸性马油洗发水","flag":1,"order":7,"status":1,"items":[{"id":10074,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"58","platformName":"洋码头","originalPrice":"136","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"729d1d86-822b-49f2-b7e5-fb8c5dbdcddd","salePrice":"58","platformId":10004,"discount":"4.3"},{"id":10073,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"59","platformName":"网易考拉海购","originalPrice":"129","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"5354","salePrice":"59","platformId":10001,"discount":"4.6"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"脱发救星的鼻祖","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_fcd31021-f6d4-4e98-b40a-67fff357a98c.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":189,"longComment":"此款唇膏不含任何香料，用后感觉闪闪的、亮亮的、没有任何厚重感，同时不粘腻，网络美女推荐人热卖品，晚上睡前可以涂抹厚厚一层，早上起来，嘴巴粉嫩嘟嘟，唇部容易干燥且经常化妆的萌妹子必选","title":"2件组合装 | DHC 蝶翠诗 纯榄润唇膏1.5克/支 2支","flag":1,"order":8,"status":1,"items":[{"id":10077,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"79","platformName":"洋码头","originalPrice":"192","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"cf50a989-2dee-421b-80b8-11133d766339","salePrice":"79","platformId":10004,"discount":"4.2"},{"id":10075,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"85","platformName":"网易考拉海购","originalPrice":"138","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"9970","salePrice":"85","platformId":10001,"discount":"6.2"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"口红界打底达人","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_53ca2b0a-34d8-4a92-bf06-1b77bbe95141.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":190,"longComment":"Devondale德运来自澳大利亚天然牧场，隶属于澳洲最大的乳制品厂商MG，专注乳制品64年。德运高钙脱脂奶粉，口感纯正，100%天然牛奶，不含任何食品添加剂和防腐剂，富含钙质和蛋白质，是学生、白领及高品质健康人士的最佳选择，长期饮用可代餐纤体、嫩白养颜。连澳洲总理都惊呼好喝的奶粉，80%澳洲人天天饮用的奶粉。一杯好奶，一天正能量的开始","title":"Devondale 德运 高钙全脂成人牛奶粉 1000克/袋","flag":1,"order":9,"status":1,"items":[{"id":10011,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"79","platformName":"网易考拉海购","originalPrice":"159","order":1,"logoImageRatio":"1.8","cheapest":true,"status":-1,"outerItemId":"4617","salePrice":"79","platformId":10001,"discount":"5"},{"id":10078,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"89","platformName":"聚美优品","originalPrice":"159","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht150917p1497204t1","salePrice":"89","platformId":10002,"discount":"5.6"},{"id":10079,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"139","platformName":"洋码头","originalPrice":"","order":3,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"340aeefa-6048-4f2a-98d3-614e99181b9d","salePrice":"139","platformId":10004,"discount":"10"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"牛奶界的液体黄金","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_870eb35c-be38-4179-9bdc-58d0b3bfd79e.jpg?imageView2/2/w/750/interlace/1/q/85"},{"id":191,"longComment":"韩国药妆动物面膜，使用天然纸浆，可可螺母水的构树，桑白皮萃取物增大肌肤的保护力度，烟酸的成份让肌肤美白更透亮，敏感肌也能适用，主攻美白，同时也补水，使用后脸部凉丝丝，明星安以轩、袁咏仪、李晨、贾乃亮等同款推荐","title":"10片组合装 | SNP 熊猫美白补水动物面膜贴10片/盒","flag":1,"order":10,"status":1,"items":[{"id":10082,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","price":"85","platformName":"洋码头","originalPrice":"160","order":1,"logoImageRatio":"1.8","cheapest":true,"status":1,"outerItemId":"051593e5-b20b-4e74-a0a1-f540b6f7b2fd","salePrice":"85","platformId":10004,"discount":"5.4"},{"id":10080,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","price":"86","platformName":"网易考拉海购","originalPrice":"199","order":2,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"5395","salePrice":"86","platformId":10001,"discount":"4.4"},{"id":10081,"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","price":"89","platformName":"聚美优品","originalPrice":"159","order":3,"logoImageRatio":"1.8","cheapest":false,"status":1,"outerItemId":"ht150911p1549654t2","salePrice":"89","platformId":10002,"discount":"5.6"}],"shortComment":"","flagValue":"海蜇头精选","subtitle":"有趣好玩的面膜","image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_47bf57a3-26a0-43bc-bb76-9881cab9d590.jpg?imageView2/2/w/750/interlace/1/q/85"}],"type":1,"imageRatio":"2.14","topicName":""}}
		}
		$scope.pastCollectibles = data.model;
	});


}]);


/*
 *	单品详情页面
 * */
app.controller('productDetailsCont', [ '$scope', '$state', 'service','$stateParams','$sce','$timeout','$anchorScroll','$location',
	function($scope, $state, service, $stateParams, $sce, $timeout, $anchorScroll, $location){
	service.getMethod('/item_detail.html?id='+$stateParams.id,function(data){

		//console.log('单品详情')
		//console.log(JSON.stringify(data))
		if(!data.model){
			console.log('单品详情页面 error')
			var data = {"code":"success","message":"执行成功！","model":{"id":181,"longComment":"温柔呵护宝宝娇嫩的肌肤，凹凸透气柔点网层，透气性更出色，小屁屁更干爽舒适。棉柔弹性环抱腰围，舒适服贴腹部；裆下柔韧设计，更服贴大腿根部，还有棉柔魔术重复贴等贴心设计。","title":"Merries 花王纸尿裤 M64片/包 2包装","status":1,"items":[{"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-ymatou.png","commentRate":"","cheapest":true,"deliveryInfo":"","tariffInfo":"","id":10058,"freightInfo":"卖家承担运费","discountInfo":[],"order":1,"platformName":"洋码头","tariff":"0","quantity":712,"shipmentInfo":"","status":1,"outerItemId":"d3bdd26e-77b1-4a6c-a7e4-89bdfefb18a1","outerItemUrl":"http://item.app.ymatou.com/forYmatouApp/product/pid?pid=d3bdd26e-77b1-4a6c-a7e4-89bdfefb18a1","platformId":10004,"discount":"5","commentNum":7,"price":"226","originalPrice":"460","volume":0,"freight":"0","salePrice":"226","commentStar":"","supplierInfo":"洋码头 海外商家"},{"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-kaola2.png","commentRate":"4.5","cheapest":false,"deliveryInfo":"","tariffInfo":"","id":10057,"freightInfo":"免运费","discountInfo":[],"order":2,"platformName":"网易考拉海购","tariff":"0","quantity":0,"shipmentInfo":"日本","status":-1,"outerItemId":"5122","outerItemUrl":"http://m.kaola.com/product/5122.html","platformId":10001,"discount":"6.6","commentNum":4175,"price":"236","originalPrice":"359","volume":19325,"freight":"0","salePrice":"236","commentStar":"98.4","supplierInfo":"网易考拉海购直营"},{"logoImage":"http://7xlj2z.com2.z0.glb.qiniucdn.com/logo-jumei.png","commentRate":"","cheapest":false,"deliveryInfo":"","tariffInfo":"价格组成：商品价 + 进口行邮税 + 国内费用 根据中华人民共和国进境物品完税价格表 ，本商品适用税率为 10% 根据海关总署公告2010年第43号公告规定，个人物品申报，应征进口税税额在人民币50元（含50元）以下的，海关予以免征。","id":10059,"freightInfo":"包邮","discountInfo":[],"order":3,"platformName":"聚美优品","tariff":"0","quantity":2709,"shipmentInfo":"","status":1,"outerItemId":"ht141111p1414749t2","outerItemUrl":"http://h5.jumei.com/product/detail?item_id=ht141111p1414749t2&type=global_deal","platformId":10002,"discount":"7.1","commentNum":0,"price":"239","originalPrice":"340","volume":93522,"freight":"0","salePrice":"239","commentStar":"","supplierInfo":"聚美极速免税店直营"}],"shortComment":"","description":"<p> <a href=\"http://http://hd.jumei.com/act/9-478-4865-baby_diaper.html?from=ppt_kao_150510_pos_1&amp;status=zs\" target=\"_blank\"></a><a href=\"http://hd.jumei.com/act/9-478-4865-baby_diaper.html?from=ppt_kao_150510_pos_1&amp;status=zs\" target=\"_blank\"> </a> </p> <p style=\"line-height:16.3636360168457px;white-space:normal;\"> <a href=\"http://hd.jumei.com/act/9-478-4865-baby_diaper.html?from=ppt_kao_150510_pos_1&amp;status=zs\" target=\"_blank\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_2d0c6210-1eb3-46e2-be9f-190f5e830804.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_84a98515-5072-407e-8345-ba96a279cb7b.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_ca2a88e9-5382-49c9-843f-dc588f1e34c8.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_d839b78f-cf8c-495f-8a72-c8364bfcaff5.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_56011aa9-2eb0-4071-8822-87ff467e0f1b.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_4b1e4ccb-8493-480b-9d5b-ace97fa6240e.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_fa0149a5-7731-41e4-bc98-a4fc2cf883dc.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_dd571a96-38bc-49fc-9e40-9bbfafb7c6ae.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_c5177759-6d0c-498e-b872-6b852072416c.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_b529131d-f3b9-4668-9dc5-ca5202950cb6.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_4161f36a-ae40-4a21-b449-15321218a6e3.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_d909efa8-36a5-4bc8-a20f-689eb641ab7f.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_d99b32f1-6cf7-48fb-991e-04870d0c41a9.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_7a4d660d-3250-4c0b-93f3-4ae61ff6bbc8.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_1acfc8eb-59de-4617-817a-6064e5c15b49.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_13e6b02e-693a-4672-a183-167dcb7607cc.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_d6831934-759b-419f-b4bd-924a0b1905fb.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_aa021c2e-8477-4e5e-b211-db949d51eb48.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_d0df8e74-ed51-43a8-9bb3-c7fe378fe11c.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_c6db9cb2-77ff-4493-8a3b-9dce478752d4.jpg\" alt=\"\"> </a> </p> <p style=\"line-height:16.3636360168457px;white-space:normal;\"> <a href=\"http://hd.jumei.com/act/9-478-4865-baby_diaper.html?from=ppt_kao_150510_pos_1&amp;status=zs\" target=\"_blank\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_57676efb-d990-45c3-be07-aca3a3230016.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_4e896104-6dcd-4a3f-8c64-d085d2660082.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_304d2f12-4ff2-44d5-8526-409d7448ba6c.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_c673ba4b-6852-4195-8b95-eb15ff4e0ae7.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_c75df235-cc2d-4b37-b34e-3200c96af741.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_b794357e-79ec-4ee2-8223-432a9df83505.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_e5193c23-4c6f-4987-baae-6618648a30c2.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_aae06c09-a3b3-489a-b5b2-4e932a4dd1f8.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_fbcf18f8-e278-469c-8be1-08f45406b919.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_bd0099b8-7da4-4df6-8e4b-ff8ea937b50d.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_5df9ca67-bbe6-4488-a928-f1fd1487a5b9.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_68637224-61de-4135-a31e-c1e02d8842a6.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_4783717c-44a7-4140-90d4-bd737587c09f.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_6af5ede0-13c2-4351-9d6a-ae89a288b53f.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_251e732f-fdb2-4ae8-9358-e4ac3669bf01.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_edf0a850-e783-4ded-9c2e-a797c75f8348.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_14c5c173-6f2e-4bca-9bfe-f23ca7a2c923.jpg\" alt=\"\"><img src=\"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_7ccf371d-6066-4591-8150-53ec0bcf17ec.jpg\" alt=\"\"> </a> </p> <p> <br> </p> <span style=\"display:none;\" id=\"__kindeditor_bookmark_start_16__\"></span>","subtitle":"超薄、超透气、超吸水","images":["http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_c33b3c63-3553-4017-abc8-6dfcf8832675.jpg?imageView2/2/w/750/interlace/1/q/85","http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_9f2e7196-72d7-4ada-86b5-f0a2c08b1518.jpg?imageView2/2/w/750/interlace/1/q/85","http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_9cc496f1-adfb-4450-82a3-65d39486aeee.jpg?imageView2/2/w/750/interlace/1/q/85","http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_417b4c65-258c-417e-adde-ce50fcd5ca15.jpg?imageView2/2/w/750/interlace/1/q/85"],"image":"http://7xlj2z.com2.z0.glb.qiniucdn.com/qn_cbf50a1e-ead5-4b51-b73d-fae76f835f13.jpg?imageView2/2/w/750/interlace/1/q/85","properties":[{"name":"商品品牌","value":"Merries"},{"name":"采购地","value":"日本"},{"name":"包装数量（片）","value":"64片*2"},{"name":"型号","value":"M"},{"name":"适用性别","value":"通用"}],"imageRatio":"1.18"}}
		}

		$scope.details = data.model;
		/*data.model.description.replace(/src/g,'lazy-img')*/
		$scope.description = $sce.trustAsHtml(data.model.description);

		$scope.selectedShops={index:0,url:data.model.items[0].outerItemUrl};
	});

	$scope.gotoDetails = function(){
		$scope.selectedInfo ='info'
		$location.hash('graphic-details');
		$anchorScroll();
	}

	// 比来比去模块 切换功能
	$scope.selectShops = function(index,item){
		$scope.selectedShops ={
			index:index,
			url:item.outerItemUrl
		}
	};

	// 图文详情模块 切换
	$scope.selectedInfo ='info'
	$scope.selectInfo = function(s){
		$scope.selectedInfo =s;
	}
	/*
	$timeout(function(){

		$scope.selectedInfo ='info'
	},1000)*/
}]);


/*
*	主题馆首页
* */
app.controller('themePavilionCont', [ '$scope', '$state', 'currentPage', 'service', function($scope, $state, currentPage, service){
	currentPage.page = 'themePavilion';
	/*
	*	主题馆图片数据
	* */
	service.getMethod('/topic_list.html?type=2',function(data){
		$scope.dataList = data.model;
	});


}]);


/*
*	主题馆单品列表页
* */
app.controller('themePavilionListCont', [ '$scope', '$state', 'service','$stateParams', function($scope, $state, service, $stateParams) {

	/*
	*	详情列表接口
	* */
	service.getMethod('/view_items.html?type=3&topic='+$stateParams.id,function(data){
		$scope.dataList = data.model;
	});

}]);


/*
 *	我的信息
 * */
app.controller('mineCont', [ '$scope', '$state', 'currentPage', 'service','messageFactory', function($scope, $state, currentPage, service, messageFactory) {
    /*
     // 数据拷贝
     var json = {
     "cookie": [
     {
     "maxAge": 604800,
     "name": "token",
     "value": "AVsY8QJuHZWBWipV4sBBkLo",
     "secure": false,
     "path": "/",
     "domain": ".haizhetou.com",
     "comment": "",
     "version": 0
     }
     ],
     "newPeople": true,
     "token": "AVsY8QJuHZWBWipV4sBBkLo",
     "userId": 10204,
     "userSex": 1,
     "userScore": 0,
     "userName": "15888826284",
     "userPhone": "15888826284",
     "userAvatar": "http://7u2fm4.com1.z0.glb.clouddn.com/119bead8-a8d9-4b6d-ad85-4954648d1835.png?imageView2/2/w/120/interlace/1/q/93",
     "userBirthday": "2015-09-17"
     };
     */
	currentPage.page = 'mine';

    // 判断是否ajax捞取个人信息
    if(currentPage.loginState.userId){
        $scope.userData = currentPage.loginState
    }else{
        service.getMethod('/user_info.html',function(data){
            if(data.code === 'success'){
                currentPage.loginState = data.model;
                $scope.userData = data.model;
            }
        },{'op':'fetch'})
    }

}]);

/*
 *	个人中心 - 设置
 * */
app.controller('setUpCont', [ '$scope', '$state', function($scope, $state) {

}]);

/*
 *	关于我们
 * */
app.controller('aboutUsCont', [ '$scope', '$state', function($scope, $state) {

}]);

/*
 *	意见反馈
 * */
app.controller('feedbackCont', [ '$scope', '$state', 'service','currentPage','messageFactory', function($scope, $state, service, currentPage,messageFactory){
    /*$scope.data = currentPage.loginState;*/
    $scope.postData = {
        platform : 'feed',
        phone : currentPage.loginState.userPhone,
        desc : ''
    };

    $scope.submit = function(){
        service.getMethod('/h5.html',function(data){
            messageFactory({text:'信息提交成功，感谢您对我们的支持。'});

            location.href = '/#/mine';
        },$scope.postData)
    }
}


]);

/*
 *	基本资料设置
 * */
app.controller('setInfoCont', [ '$scope', '$state','currentPage','messageFactory','service','history',
    function($scope, $state, currentPage,messageFactory, service,history) {
	$scope.userData = currentPage.loginState;
    // 判断是否有生日字段
    if($scope.userData.userBirthday){
        $scope.year = 	$scope.userData.userBirthday.substr(0,4);
        $scope.month = 	$scope.userData.userBirthday.substr(5,2);
        $scope.date = 	$scope.userData.userBirthday.substr(8,2);

        $scope.date = new Date($scope.userData.userBirthday);
    }


    $scope.submit = function(){

        // 暂时模拟数据
        /*
        messageFactory({text:'修改成功'})
        history.back();
        */

        var params = {
            birthday:$scope.$$childTail.$year + '-' + $scope.$$childTail.$month + '-' + $scope.$$childTail.$date,
            op:'editInfo',
            userSex:$scope.userData.userSex,
            userName:$scope.userData.userName
        };
        service.getMethod('/user_info.html',function(data){
            messageFactory({text:'修改成功'})
            location.href = '/#/mine/setUp';
		},params);

	};
}]);

/*
 *	修改密码
 * */
app.controller('upPassCont', [ '$scope', '$state', 'service','currentPage','messageFactory','history', function($scope, $state, service, currentPage,messageFactory, history){

    $scope.postData = { op: 'editPassword'};

    $scope.submit = function(){
        // 暂时模拟数据
        /*
        messageFactory({text:'修改成功'})
        history.back()
        */

        service.getMethod('/user_info.html',function(data){
            messageFactory({text:data.message});
            if(data.code === 'success'){
                messageFactory({text:'修改成功'})
                history.back()
            }
        },$scope.postData)

    };
}]);

/*
 *	登录页
 * */
app.controller('loginCont', [ '$scope', '$state','$timeout', 'service','currentPage','messageFactory', function($scope, $state,$timeout, service, currentPage,messageFactory){
/*	$scope.userLog = {};
	$scope.userReg = {};*/

	// 根据参数判断是注册还是找回密码
	$scope.switch = function(model){
		$scope.model = model;
		$scope.index = 1;
	};

	// 点击登录
	$scope.login = function(){
		$scope.userLog.op = 'normal';
		service.getMethod('/login.html',function(data){
			messageFactory({text:data.message});
			if(data.code === 'success'){
				currentPage.loginState = data.model;
				location.href = '/#/index';
			}
		},$scope.userLog)
	};


	function codeTimeout(){	//后期拆封指令  发送短信时间倒计时
		var time = $timeout(function(){
			if($scope.count <= 0){
				$scope.count = 0;
				return false;
			}
			codeTimeout();
			$scope.count--;
		},1000);
	}
	// 输入手机号点击注册
	$scope.getCodeClick = function(){
		$scope.userReg.op = $scope.model;
		service.getMethod('/verify_mobile.html',function(data){		//判断是否是注册操作还是找回密码 如果是注册的话哪验证账号是否存在，否则直接发送验证码
			messageFactory({text:'验证码发送成功'});
			$scope.index = 2;
			$scope.count = 60;
			$timeout.cancel(codeTimeout);
			codeTimeout();
		},$scope.userReg);
	};


	// 输入手机验证码以及密码提交表单
	$scope.regClick = function(){
		$scope.userReg.op = 'verify';
		service.getMethod('/verify_mobile.html',function(data){   //短信验证通过
			$scope.userReg.userPhone = $scope.userReg.mobile;
			//注册
			if($scope.model == 'register'){
				$scope.userReg.op = 'normal';
				service.getMethod('/register.html',function(data){
					if(data.code == 'success'){
						messageFactory({text:data.message});
					}
				},$scope.userReg);
			}else{   //找回密码
				$scope.userReg.op = 'findPassword';
				$scope.userReg.newPassword = $scope.userReg.userPassword;
				service.getMethod('/user_info.html',function(data){
					if(data.code == 'success'){
						messageFactory({text:data.message});
						$scope.index = 0;		//跳转到登陆
						$scope.userLog = {};	// 置空对象
					}
				},$scope.userReg);
			}
		},$scope.userReg)
	};

	// 顶部 返回按钮
	$scope.backClick = function(){
		if($scope.index > 0){
			$scope.index--;
		}else{
			location.href = '/#/index';
		}
	};
}]);

/*
 *	注册 - 输入手机号
 * */
app.controller('registerCont', [ '$scope', '$state', 'service', function($scope, $state, service) {
	$scope.userReg = {
		op:'register'
	};
	$scope.nextPage = function(){
		service.getMethod('/verify_mobile.html',function(data){
			if( data.code ==='success'){
				location.href = '/#/mine/registerNext';
			}
		},$scope.userReg);
	}
}]);

/*
 *	注册 - 手机号码验证&密码设置
 * */
app.controller('registerNextCont', [ '$scope', '$state', '$timeout', 'service', function($scope, $state, $timeout, service) {
	$scope.count = 0;
	$scope.userReg= {
		op:'normal',
		mobile:'15888826284'
	};


	function codeTimeout(){ //后期拆封指令  发送短信时间倒计时
		var time = $timeout(function(){
			if($scope.count <= 0){
				$scope.count = 0;
				return
			}
			codeTimeout();
			$scope.count--;
		},1000);
	}
	$scope.loadVerify = function(){
		service.getMethod('',function(data){
			$scope.count = 60;
			codeTimeout();
		});
	};
	$scope.loadVerify();


	$scope.register = function(){
		service.getMethod('/verify_mobile.html',function(data){
			if( data.code ==='success'){

				//location.href = '/#/mine/registerNext';
				location.href = '/#/index';
			}


		},$scope.userReg)

	}
}]);