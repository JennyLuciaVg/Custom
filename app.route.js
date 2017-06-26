var app = angular.module('customPage.routes',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: "/views/home.html",
    controller: "homeController",
    controllerAs: "home"
  })
  .when('/About-Us',{
    templateUrl: "/views/aboutUs.html",
    controller: "aboutController",
    controllerAs: "about"
  })
  .when('/Who-We-Are',{
    templateUrl: "/views/whoWeAre.html",
    controller: "whoController",
    controllerAs: "who"
  })
  .when('/Specializations',{
    templateUrl: "/views/specializations.html",
    controller: "specializationsController",
    controllerAs: "specializations"
  })
  .when('/Contact-Us',{
    templateUrl: "/views/contactUs.html",
    controller: "contactController",
    controllerAs: "contact"
  });
}]);
