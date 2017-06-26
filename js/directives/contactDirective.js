var app = angular.module('customPage');

app.directive('contactDirective', function(contactService){
  return {
    scope: {
    },
    restrict: "E",
    templateUrl: 'js/templates/contactDirective.html',
    controller : function ($scope,$timeout){

      $timeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      });

      var td = this;
      td.textList = {};
      var promise = contactService.getText();
      promise.then(function(data) {
          td.textList = data.data;
      });

      $scope.td = td;
    }
  }
});
