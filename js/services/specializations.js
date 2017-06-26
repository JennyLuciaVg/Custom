var app = angular.module('customPage');

app.service('specializationsService', function($http, $q) {

  var text = {};
  var deferred = $q.defer();

  $http.get('../json/specializations.json').then(function(data) {
      deferred.resolve(data);
  });

  this.getText = function(){
      return deferred.promise;
  };

});
