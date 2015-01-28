/**
 * This module is used in development to mock $http calls
 */
angular.module( 'ngBoilerplateShop.dev', [ 'ngBoilerplateShop', 'ngMockE2E' ]);

/**
 * This is where you store `$httpBackend.when()` calls
 * to go with your app's `$http` calls.
 */
angular.module( 'ngBoilerplateShop' ).run( function ( $httpBackend ) {

  $httpBackend.when( 'GET', 'template.html' ).respond( '<div class="template">template</div>');

  $httpBackend.when( 'GET', 'assets/data/shop.json' ).respond( function () {
    return [200 /*<%= shopData %>*/];
  });

  $httpBackend.when( 'GET', '/wcs/resources/store/10102/categoryview/@top' ).respond( function(method, url, data) {
    return [200 /*<%= topCategories %>*/];  
  });

  $httpBackend.when( 'GET', '/wcs/resources/store/10102/categoryview/byParentCategory/10051' ).respond( function(method, url, data) {
    return [200 /*<%= categoryApparels %>*/];   
  });

  $httpBackend.when( 'GET', '/wcs/resources/store/10102/categoryview/byParentCategory/10077' ).respond( function(method, url, data) {
    return [200 /*<%= categoryElectronics %>*/];  
  });


  $httpBackend.when( 'GET', '/wcs/resources/store/10102/categoryview/byParentCategory/10083' ).respond( function(method, url, data) {
    return [200 /*<%= categoryGrocery %>*/];  
  });

  $httpBackend.whenGET(/^\/wcs\/.*/).passThrough();

})

;