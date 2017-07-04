var app = angular.module('customPage');

app.directive('whoDirective', function(whoService){
  return {
    scope: {
    },
    restrict: "E",
    templateUrl: 'js/templates/whoDirective.html',
    controller : function ($scope,$timeout){

      $timeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      });

      var td = this;
      td.textList = {};
      var promise = whoService.getText();
      promise.then(function(data) {
        console.log("data", data);
          td.textList = data.data.whoList;
      });

      $scope.td = td;
    }
  }
});
