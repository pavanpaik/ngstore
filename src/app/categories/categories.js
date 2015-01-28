angular.module( 'ngbps.categories', [
  'ui.router'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'categories', {
    url: '/:categorySeoPath/b-:catgroupId',
    views: {
      "main": {
        controller: 'CategoryCtrl',
        templateUrl: 'categories/category.tpl.html'
      }
    }
  });
})

.filter('catSeoFilter', function() {
  return function(levels) {
    var catSeoPath = "";
    for (var i = 0; i < levels.length; i++) {
      if(i > 0 ) {
        catSeoPath += "-";
      }
      catSeoPath += levels[i];
    }
    return catSeoPath;
  };
})

.controller( 'CategoryCtrl', function CategoryController(  $scope, $stateParams, $state, $log, wcsServices ) {
    var categorySeoPath = $stateParams.categorySeoPath;
    $scope.levels = categorySeoPath.split("-"); 

    wcsServices.getCategoryView($stateParams.catgroupId).then(function(data) {
      $scope.childCategories = data;
    }, function(errorMessage) {
      $log.info("Failed to load category view for parentCategory("+ $stateParams.catgroupId +"), skipping to productList view");
      $state.go('^.productlist',{ categorySeoPath: $stateParams.categorySeoPath , catgroupId: $stateParams.catgroupId });
    });
})

;