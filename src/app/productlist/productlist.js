angular.module( 'ngbps.productlist', [
  'ui.router'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'productlist', {
    url: '/:categorySeoPath/b-:catgroupId',
    views: {
      "main": {
        controller: 'ProductlistCtrl',
        templateUrl: 'productlist/productlist.tpl.html'
      }
    }
  });
  $stateProvider.state( 'keywordsearch', {
    url: '/keywordsearch/:searchCategory/:searchTerm',
    views: {
      "main": {
        controller: 'KeywordSearchCtrl',
        templateUrl: 'productlist/productlist.tpl.html'
      }
    }
  });
})

.controller( 'ProductlistCtrl', function ProductlistController(  $scope, $stateParams, $log, wcsServices ) {
    var categorySeoPath = $stateParams.categorySeoPath;
    $scope.levels = categorySeoPath.split("-"); 

    wcsServices.getCategoryProductView($stateParams.catgroupId).then(function(response){
      $scope.subcat = response;
      $scope.isopen=true;
      $scope.currentPage=1;
      
      $scope.listView = function () {
        $scope.viewType = 'list-group-item';
        $scope.listBtnClass = 'btn-primary';
      $scope.gridBtnClass = 'btn-default';
      };
      $scope.gridView = function () {
        $scope.viewType = 'grid-group-item';
        $scope.listBtnClass = 'btn-default';
        $scope.gridBtnClass = 'btn-primary';
      };
      $scope.gridView();
    },function(errorMessage){
      $log.error("Error loading product view for category : " + $stateParams.catgroupId);
    });
})
.controller( 'KeywordSearchCtrl', function ProductlistController(  $scope, $stateParams, $log, wcsServices ) {
    $scope.searchTerm = $stateParams.searchTerm;
    $scope.searchCategory = $stateParams.searchCategory;
    if(!$stateParams.searchTerm) {
      return;
    }
    wcsServices.getSearchProductView($stateParams.searchTerm).then(function(response){
      $scope.subcat = response;
      $scope.isopen=true;
      $scope.currentPage=1;
      
      $scope.listView = function () {
        $scope.viewType = 'list-group-item';
        $scope.listBtnClass = 'btn-primary';
      $scope.gridBtnClass = 'btn-default';
      };
      $scope.gridView = function () {
        $scope.viewType = 'grid-group-item';
        $scope.listBtnClass = 'btn-default';
        $scope.gridBtnClass = 'btn-primary';
      };
      $scope.gridView();
    },function(errorMessage){
      $log.error("Error loading product view for searchTerm : " + $stateParams.searchTerm);
    });
})


.controller( 'PaginationCtrl', function ProductlistController(  $scope, $http, $stateParams ) {
    
})

.controller( 'NarrowbyCtrl', function ProductlistController(  $scope, $http, $stateParams ) {
    $scope.isopen=true;
})

.filter('withoutCatgroup', function() {
  return function(val) {
    if( val.name != 'ParentCatalogGroup') {
      return val;
    }
  };
})

;