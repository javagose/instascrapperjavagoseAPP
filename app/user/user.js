'use strict';

angular.module('myApp.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/:username', {
    templateUrl: 'user/user.html',
    controller: 'userCtrl'
  });
}])

.controller('userCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log("controller called ...");
  var username = $routeParams.username;
   $scope.getUser = function(){
   $http.get('http://localhost:8080/instagram/getUser.php',{params: { username: username}}).success(function(response){
       $scope.user = response;
       console.log("success");
     });
   }
   $scope.getUserMedias = function(){
     var username = $routeParams.username;
   $http.get('http://localhost:8080/instagram/getUserMedias.php',{params: { username: username}})
   .success(function(response){
       $scope.medias = response;
       console.log("success");
     });
   }

}]);
