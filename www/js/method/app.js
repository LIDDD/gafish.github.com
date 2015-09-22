
var globalPath = 'http://h5apitest.haizhetou.com';
angular.cookie = {
	setCookie: function (cname, cvalue, exdays) {//设置cookie
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";Domain=.zhefengle.cn;" + expires;
	},
	getCookie: function (cname) {//获取cookie
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
		}
		return "";
	},
	clearCookie: function (name) {//清除cookie
		this.setCookie(name, "", -1);
	}
};

var app = angular.module('app', ['ui.router','angular-carousel','angularLazyImg','angularDateBinder' ],
	[ '$compileProvider', function($compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*((https?|ftp|tel|sms|mailto|file|javascript|chrome-extension):)|#/);
} ]).factory('authHttpResponseInterceptor', [ '$q', '$location', function($q, $location) {
	return {
		request: function (config) {
			//var token = angular.cookie.getCookie('getToken')

			config.headers = config.headers || {};
			if(config.method == 'JSONP'){
				if(!config.params){
					config.params = {};
				}
				config.params.callback='JSON_CALLBACK'
			}

			if(config.method.toLowerCase() == 'get'){
				if(!config.params){
					config.params = {};
				}
				//config.params.token = token||'';
			}else{
				if(!config.data){
					config.data = {};
				}
				//config.data.token = token;
			}
			return config;
		},
		response : function(response) {

			return response || $q.when(response);
		},
		responseError : function(rejection) {
			if (rejection.status === 401) {

			}
			return $q.reject(rejection);
		}
	}
} ]).config([ '$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
	$httpProvider.interceptors.push('authHttpResponseInterceptor');
	$urlRouterProvider.otherwise('index');

	//$httpProvider.defaults.useXDomain = true;
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];


	// 直接影响路由是否直接跳转
	$urlRouterProvider.otherwise(function($injector, $location) {
		if ($location.$$url === '') {
			return 'index'
		}
	});
	window.routers = [{
		"name" : "index", // 海蜇头首页
		"url" : "/index",
		"templateUrl" : "./templates/module/index/index.html",
		"controller" : "indexCont"
	},{
		"name" : "productDetails", // 单品详情
		"url" : "/productDetails/{id}",
		"templateUrl" : "./templates/module/productDetails/productDetails.html",
		"controller" : "productDetailsCont"
	},{
		"name" : "themePavilion", // 主题馆首页
		"url" : "/themePavilion",
		"templateUrl" : "./templates/module/themePavilion/index.html",
		"controller" : "themePavilionCont"
	},{
		"name" : "themePavilionList", // 主题馆单品列表
		"url" : "/themePavilionList/{id}",
		"templateUrl" : "./templates/module/themePavilion/list.html",
		"controller" : "themePavilionListCont"
	},{
		"name" : "mine", // 我的
		"url" : "/mine",
		"templateUrl" : "./templates/module/mine/mine.html",
		"controller" : "mineCont"
	},{
		"name" : "aboutUs", // 关于我
		"url" : "/mine/aboutUs",
		"templateUrl" : "./templates/module/mine-aboutUs/aboutUs.html",
		"controller" : "aboutUsCont"
	},{
		"name" : "setUp", // 个人中心 - 设置
		"url" : "/mine/setUp",
		"templateUrl" : "./templates/module/mine-setUp/setUp.html",
		"controller" : "setUpCont"
	},{
		"name" : "feedback", // 个人中心 - 意见反馈
		"url" : "/mine/feedback",
		"templateUrl" : "./templates/module/mine-feedback/feedback.html",
		"controller" : "feedbackCont"
	},{
		"name" : "setInfo", // 个人中心 - 基本资料设置
		"url" : "/mine/setInfo",
		"templateUrl" : "./templates/module/mine-setInfo/setInfo.html",
		"controller" : "setInfoCont"
	},{
		"name" : "upPass", // 个人中心 - 修改密码
		"url" : "/mine/upPass",
		"templateUrl" : "./templates/module/mine-upPass/upPass.html",
		"controller" : "upPassCont"
	},{
		"name" : "login", // 个人中心 - 登录
		"url" : "/mine/login",
		"templateUrl" : "./templates/module/mine-login/login.html",
		"controller" : "loginCont"
	},{
		"name" : "register", // 个人中心 - 修改密码
		"url" : "/mine/register",
		"templateUrl" : "./templates/module/mine-register/register.html",
		"controller" : "registerCont"
	},{
		"name" : "registerNext", // 个人中心 - 修改密码
		"url" : "/mine/registerNext",
		"templateUrl" : "./templates/module/mine-registerNext/registerNext.html",
		"controller" : "registerNextCont"
	}
	];
	//定义路由表
	angular.forEach(window.routers, function(item) {
		var config = {
			url : item.url,
			views : {
				"appState" : {
					templateUrl : item.templateUrl,
					controller : item.controller
				}
			}
		};
		if (item.name) {
			$stateProvider.state(item.name, config);
		}
	});

	// 添加ajax请求头 便于异常处理		&& 引发模拟数据请求不到的bug
	//$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

} ]).run([ '$rootScope', '$http', '$timeout','messageFactory', function($rootScope, $http, $timeout, messageFactory){
	// $http.defaults.cache = false;
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	// 路由成功跳转之后执行
	$rootScope.$on('$stateChangeSuccess', function(evt, current, previous) {
		$timeout(function(){
			window.scrollTo(0,0); //由于监听滚动条事件，要做缓存scroll 定位,成功跳转所有页面都定位回去
		},0);
	});

	// 公共的service错误信息提示方法
	angular.filterService = function(result,callback) {
		if(result.code == 'error'){
			messageFactory({text: result.message});
		} else {
			callback(result);
		}
	}
} ]);
