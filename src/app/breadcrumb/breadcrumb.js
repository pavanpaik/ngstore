angular.module( 'ngbps.breadcrumb', [
])


.directive('breadcrumb', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    controller: 'BreadcrumbCtrl',
    templateUrl: 'breadcrumb/breadcrumb.tpl.html',
    scope: {
      levels: '=levels'
    }
  };
}])


.controller( 'BreadcrumbCtrl', function BreadcrumbController( $scope, $log ) {
  $log.info("Breadcrumb --" + $scope.levels);
})

;