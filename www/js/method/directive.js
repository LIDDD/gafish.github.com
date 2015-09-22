app.directive('goback', ['history', function(history) {
    return {
        restrict: "EA",//指令的使用方式，包括标签，属性，类，注释
        template: '<a href="javascript:;" class="titLeft" ng-click="back()"><span class="icon return"></span></a>',//指令使用的模板，用HTML字符串的形式表示
        replace: true,//是否用模板替换当前元素，若为false，则append在当前元素上
        link: function (scope, elem, attrs){
            scope.back = function(){ history.back() };
        }
    }
}]).directive('goTop', ['$window','$location', '$anchorScroll', function($window, $location, $anchorScroll) {
    return {
        restrict: "EA",//指令的使用方式，包括标签，属性，类，注释
        template: '<a href="javascript:;" class="goTop" ng-click="goTop()" ng-show="isTop"></a>',//指令使用的模板，用HTML字符串的形式表示
        replace: true,//是否用模板替换当前元素，若为false，则append在当前元素上
        link: function (scope, elem, attrs){
            scope.isTop = false;
            angular.element($window).on('scroll',function(){
                scope.isTop = $window.scrollY > 500?true:false;
            });
            scope.goTop = function(){
                $window.scrollTo(0,0);
                scope.isTop = false;
            };
        }
    }
}]).directive('validate', ['$compile','$timeout',function($compile,$timeout) {
    return {
        restrict : 'EA',
        require: ['ngModel','^?formVaildate'],
        link : function(scope, elm, attrs,controllers) {

            var ngModelCtrl = controllers[0];
            var formCtrl = controllers[1];
            var elmName = elm.attr("name");

            var vailDataType = elm.attr('validate-type');

            var rule = elm.attr('validate');
            var ruleRpe = rule.replace(/:/g,",");
            var ruleArray = ruleRpe.substr(1,rule.length-2).split(",");
            var formName = formCtrl.form.attr("name");

            var repeatFn = function(){
                if(tarVal.length > 0){
                    if(repeatVal == tarVal){
                        ngModelCtrl.$setValidity('repeatMessage', true);
                    }else{
                        ngModelCtrl.$setValidity('repeatMessage', false);
                    }
                }else{
                    ngModelCtrl.$setValidity('repeatMessage', true);
                }
            };


            if(vailDataType == 'phone'){
                var res = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/);
                scope.$watch(attrs.ngModel, function(newVal,lat){
                    if(!!newVal && newVal.length > 0){
                        if(res.test(newVal)){
                            ngModelCtrl.$setValidity('phone', true);
                        }else{
                            ngModelCtrl.$setValidity('phone', false);
                        }
                    }else{
                        ngModelCtrl.$setValidity('phone', true);
                    }

                })
            }

            if(vailDataType == 'number'){
                var res = new RegExp(/^[0-9]*$/);
                scope.$watch(attrs.ngModel, function(newVal,lat){
                    if(!!newVal && newVal.length > 0){
                        if(res.test(newVal)){
                            ngModelCtrl.$setValidity('number', true);
                        }else{
                            ngModelCtrl.$setValidity('number', false);
                        }
                    }else{
                        ngModelCtrl.$setValidity('number', true);
                    }

                })
            }

            if(vailDataType == 'repeat'){
                var repeat = angular.element(document.getElementById(elm.attr("repeat")));
                var repeatVal = '';
                var tarVal = '';
                repeat.on('keyup', function () {
                    repeatVal = this.value;
                    repeatFn();
                });
                scope.$watch(attrs.ngModel, function(newVal,lat){
                    tarVal = newVal || '';
                    repeatFn();
                });
            }
            angular.forEach(ruleArray,function(item,index){
                if(index % 2 == 0){
                    ngModelCtrl.$setValidity(item, false);
                    elm.after($compile('<div class="error" ng-show="'+ formName +'.'+ elmName +'.$error.'+ item +' && '+ formName +'.formVaild">'+ ruleArray[index + 1] +'</div>')(scope))
                }
            });
        }
    }
}]).directive('formSubmit', function() {
    return {
        restrict : 'EA',
        require: ['^?formVaildate'],
        controller: ['$element',"$attrs", function($element,$attrs) {
            this.formSubmit = $element;
        }],
        link: function (scope, elm, attrs,formController) {
            scope.$on('$destroy', function(){
                elm.off('click');
            });
            var form = formController[0].form;
            var formName = form.attr("name");
            elm.on('click',function(){
                if(scope[formName].$valid){
                    scope[formName].formVaild = false;
                    scope.$eval(attrs.formSubmit);
                }else{
                    scope[formName].formVaild = true;
                }
                //console.log(formController[0].form.find('div.error'))
            })
        }
    }
}).directive('formVaildate', function() {
    return {
        restrict: 'EA',
        require: ['^?formSubmit'],
        controller: ['$element', "$attrs", function ($element, $attrs) {
            this.form = $element;
        }],
        link : function(scope, elm, attrs) {
            elm.attr('novalidate',true)
        }
    }
}).directive( 'compileData'[ '$timeout','$compile', function ( $timeout,$compile ) {
    return {
        restrict: "EA",//指令的使用方式，包括标签，属性，类，注释
        template: '',//指令使用的模板，用HTML字符串的形式表示
        replace: true,//是否用模板替换当前元素，若为false，则append在当前元素上
        link: function ( scope, element, attrs ) {
            $timeout(function(){
                attrs.$observe( 'template', function ( myTemplate ) {
                    alert(1)
                    var myTemplate = scope.description
                    console.log(myTemplate)
                    if ( angular.isDefined( myTemplate ) ) {
                        var elmnt = $compile( myTemplate )( scope );

                        element.html(""); // dummy "clear"

                        element.append( elmnt );
                    }
                });
            },0)
        }
    }
}]);


/*
app.directive('bindHtml', ['$sce', function($sce) {
    return {
        restrict: "EA",//指令的使用方式，包括标签，属性，类，注释
        template: '',//指令使用的模板，用HTML字符串的形式表示
        replace: true,//是否用模板替换当前元素，若为false，则append在当前元素上
        link: function (scope, element, attr){
            console.log(attr.ngBindHtml)

            scope.$watch($sce.parseAsHtml(attr.ngBindHtml), function(value) {
                element.html(value || '');
            });
        }
    }
}]);*/
