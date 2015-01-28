angular.module('ngbps.wcsServices', [

])

.factory('wcsServices', function( $http, $q) {
  return {
    'apiPath' : '/wcs/resources/store/10152/',
    

    // Utility Function to call the service and return the response after processing it with the callback function
    wcsSericeCall : function(serviceUrl, callback) {
      var deferred = $q.defer();
      $http.defaults.useXDomain = true; //to enable CORS for external calls 
      $http.get(serviceUrl).success(function (data) {
          if (typeof callback == "function") {
            data = callback(data);
          }
          deferred.resolve(data);  
      }).error(function(data){ 
          deferred.reject('An Error occured while trying to fetch data from WCS Service :: ' + serviceUrl);  
      });
      return deferred.promise;
    },

    
    getEmSpotData : function (emsname) {
      // Make a call to WCS service and return the data as is
      return this.wcsSericeCall(this.apiPath + "espot/" + emsname);
    },

    getTopCategories : function () {
      return this.wcsSericeCall(this.apiPath + "categoryview/@top", function(response) {
        //getting departments from response
        var departments=[];
        var topCategory = response.CatalogGroupView;
        for (var i = 0; i < topCategory.length; i++) {
          var dept = topCategory[i];
          departments.push({ "name":dept.name,"categoryId":dept.uniqueID});      
        }
        return departments;
      });
    },

    getCategoryView : function(parentCategoryId) {
      return this.wcsSericeCall(this.apiPath + "categoryview/byParentCategory/" + parentCategoryId);
    },

    getCategoryProductView : function(categoryId) {
      return this.wcsSericeCall(this.apiPath + "productview/byCategory/" + categoryId);
    },

    getSearchProductView : function(searchTerm) {
      return this.wcsSericeCall(this.apiPath + "productview/bySearchTerm/" + searchTerm);
    },

    getProductDetailsView : function(partnumber) {
      return this.wcsSericeCall(this.apiPath + "productview/" + partnumber);
    }
  };
});
