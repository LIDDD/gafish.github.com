app.service('service', [ '$http', '$rootScope', function($http, $rootScope) {
    this.getMethod = function(url,callback,params) {
        $http({
            method : 'JSONP',
            url : globalPath+url,
            cache : false,
            params:params||{}
        }).success(function(data, status) {
            angular.filterService(data,callback);
        }).error(function(data, status, headers, config) {
            angular.filterService({code:"error",message:'请求出错'},callback);
        });
    };

    this.postMethod = function(url,data,callback) {
        $http({
            method : 'POST',
            url : globalPath+url,
            cache : false,
            data : data
        }).success(function(data, status) {
            angular.filterService(data,callback);
        }).error(function(data, status, headers, config) {
            angular.filterService({code:"error",message:'请求出错'},callback);
        });
    };

    this.logout=function(callback, url) {
        $http({
            method : 'GET',
            url : url,
            cache : false
        }).success(function(data, status) {
            callback(data);
        }).error(function(data, status, herders, config) {
            // $.messageBox({ message: "注销用户出错"});
            alert('注销用户出错')
        });
    };


    /*
    this.deleteUserById = function(params, callback) {
        this.getTemplate('/users/deleteUserById?id=' + params.id, callback);
    };
    this.addUser = function(data, callback) {
        this.postTemplate('users/addUser', data, callback);
    };
    this.updateUser = function(data, callback) {
        this.postTemplate('users/updateUser', data, callback);
    };
    this.getOrgTree = function(callback, data) {
        this.postMethod(callback,'/getOrgTree',data);
    }
    */
} ]);
