angular.module('Mailchimp', [])

.directive('mailchimp', [function() {
  return {
    restrict:'AE',
    replace:true,
    templateUrl:'Mailchimp/mailchimp.tpl.html'
  };
}])

;

