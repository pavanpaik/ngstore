angular.module( 'ngbps.product', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'product', {
    url: '/:productTitle/p-:partNumber',
    views: {
      "main": {
        controller: 'ProductCtrl',
        templateUrl: 'product/product.tpl.html'
      }
    }
  });
})


.controller( 'ProductCtrl', function ProductController( $stateParams, $scope, wcsServices ) {
    var productTitle = $stateParams.productTitle;
    var partNumber = $stateParams.partNumber;
    wcsServices.getProductDetailsView($stateParams.partNumber).then(function(response){
      $scope.productView = response;
    },function(data){ 
    });
})

.controller( 'RatingCtrl', function ProductController( $stateParams, $scope, $http ) {
  $scope.rate = 3;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
})

.controller( 'ProductTabsCtrl', function ProductController( $stateParams, $scope, $http ) {
})


.directive('productList', function() {
  return {
    restrict:'E',
    replace:true,
    scope:{products:'='},
    templateUrl:'product/productList.tpl.html',
    link:function(scope,element,attrs){
      scope.classname=attrs['classname'] || 'products';
      scope.productClassname=attrs['productClassname'];
    }
  };
})


.directive('featureLink', ['$compile', function($compile){
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {
      var expression = attrs.ngRepeat,
          match = expression.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
          feature = scope[match[1]];

      // text feature:"string"
      // link feature:{link:"popover",placement:"right",popover:"msg",text:"text {{anchor text}}"}
      // link feature:{link:"tooltip",placement:"above",tooltip:"msg",text:"text {{anchor text}}"}
      if (angular.isObject(feature)) {
        var featureLink, linkText = feature.text.match(/{{(.+)}}/)[1]; 
        var placement = feature.placement || 'top';
        if (feature.link=='popover'){
          featureLink = '<a popover-placement="'+placement+'" popover="'+feature.popover+'">'+linkText+'</a>';
        }
        if (feature.link=='tooltip'){
          featureLink = '<a tooltip-placement="'+placement+'" tooltip="'+feature.tooltip+'" tooltip-trigger="click">'+linkText+'</a>';
        }
        feature = angular.element('<span>'+feature.text.replace(/{{.+}}/,featureLink)+'</span>');
        $compile(feature)(scope);
      }
      element.append(feature);
    }
  };
}])

;
