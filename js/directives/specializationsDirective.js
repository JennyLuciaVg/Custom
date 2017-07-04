var app = angular.module('customPage');

app.directive('specializationsDirective', function(specializationsService){
  return {
    scope: {
    },
    restrict: "AE",
    templateUrl: 'js/templates/specializationsDirective.html',
    controller : function ($scope,$timeout){

      $timeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      });

      var td = this;
      td.textList = {};
      var promise = specializationsService.getText();
      promise.then(function(data) {
          td.textList = data.data;
      });

      $scope.td = td;
    }
  }
});
