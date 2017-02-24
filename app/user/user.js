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
  $scope.loadingUser = true;
  $scope.isPrivate = true;
  $scope.loadingError = false;
   $scope.getUser = function(){
   $http.get('http://localhost:8080/instagram/getUser.php',{params: { username: username}})
   .success(function(response){
       $scope.user = response;
       $scope.isPrivate= response.isPrivate;
       console.log($scope.isPrivate);
     })
     .catch(function (err) {
      // Log error somehow.
      $scope.loadingError = true;
      console.log("true");
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.

    });
   }


   $scope.getUserMedias = function(){
     var username = $routeParams.username;
   $http.get('http://localhost:8080/instagram/getUserMedias.php',{params: { username: username}})
   .success(function(response){
       $scope.medias = response;
     })
     .catch(function (err) {
      // Log error somehow.
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.
      $scope.loadingUser = false;
    });
   }

}]);
