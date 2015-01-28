angular.module( 'ngbps.menubar', [
  'ui.router'
])


.directive('menubar', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    controller: 'MenubarCtrl',
    templateUrl: 'menubar/menubar.tpl.html'
  };
}])


.controller( 'MenubarCtrl', function MenubarController( $scope, $http, $state, $log, wcsServices ) {
  
  //Get Top categories and update in the scope
  wcsServices.getTopCategories().then( function(data) {
    $scope.categories = data;
  }, function(errorMessage) {
    $log.error("inside getTopCategories: error data" + errorMessage);
  });

  //This function is called when user selects a Category from the search within dropdown
  $scope.selectCategory = function (category) {
    $scope.searchCategory = category;
  };

  //This function will be called once user clicks on search
  $scope.search = function (searchTerm, searchCategory) {
    if(!!searchTerm) {
      $state.go('keywordsearch',{'searchTerm' : searchTerm, 'searchCategory' : searchCategory});
    } else {
      //TODO: Error style on search box to prompt user to enter keyword
      $scope.balnkSearch=true;
    }
  };

})


.filter('searchWithinCategory', function() {
  return function(val) {
    return !!val? val : 'All Departments';
  };
})

.directive('onEnter', function() {
    return {
        scope: {onEnter: '&'},
        link: function(scope, element) {
            console.log(scope);
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.onEnter();
                    scope.$apply();
                }
            });
        }
    };
})

;