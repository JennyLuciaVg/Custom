var app = angular.module('customPage');

app.directive('headerDirective', function(){
  return {
    scope: {
    },
    restrict: "E",
    templateUrl: 'js/templates/headerDirective.html',
    controller : function ($scope,$timeout){


    }
  }
});
