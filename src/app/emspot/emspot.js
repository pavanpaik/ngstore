angular.module( 'ngbps.emspot', [ ])

.directive('emspot', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    controller: 'EmspotCtrl',
    templateUrl: 'emspot/emspot.tpl.html',
    scope: {
      emsname: '@emsname'
    }
  };
}])

.filter('marketingContent',function(){
  return function(activityData){
    var ret = [];
    if(!! activityData) {
      for (var i = 0; i < activityData.length; i++) {
        if(!!activityData[i] && activityData[i].baseMarketingSpotDataType == 'MarketingContent') {
          ret.push(activityData[i]);
        }
      }
    }
    return ret;
  };
})

.filter('lang',function(){
  return function(attachmentAssets,field){

    var ret = [];
    for(var j in attachmentAssets){
      if( !!attachmentAssets[j].attachmentAssetLanguage && attachmentAssets[j].attachmentAssetLanguage[j] == '-1'){
        //multiple language content, choose the selected language
        ret.push(attachmentAssets[j]);
        break;
      } else {
        // No language dependent content
        ret.push(attachmentAssets[0]);
      }
    }
    return ret;
  };
})
.controller( 'EmspotCtrl', function EmspotController( $scope, $log, wcsServices ) {
  if (!! $scope.emsname) {
    $log.info("Fetching emspot : " + $scope.emsname);
    wcsServices.getEmSpotData($scope.emsname).then( function(data) {
      var marketingSpotData = data.MarketingSpotData[0].baseMarketingSpotActivityData[0];
      $scope.activityData = data.MarketingSpotData[0].baseMarketingSpotActivityData;
    }, function(errorMessage) {
      $log.info("Could not fetch emspot : " + $scope.emsname);
    });
  }
})

;