'use strict';

angular.module('instaPage.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  //user full route
  $routeProvider.when('/user/:username/:fullname', {
    title : function(params){ return params.username+" "+ params.fullname +" instagram Photos and videos";},
    templateUrl: 'user/user.html',
    controller: 'userCtrl'
  });
  //user route  for the @user
  $routeProvider.when('/user/:username', {
    title : function(params){ return params.username+" instagram Photos and videos";},
    templateUrl: 'user/user.html',
    controller: 'userCtrl'
  });
}]).
controller('userCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log("controller called ...");
    var username = $routeParams.username;
    $scope.loadingUser = true;
    $scope.isPrivate = true;
    $scope.loadingError = false;
    //get user informations info
     $scope.getUser = function(){
     $http.get('http://localhost:8080/instagram/getUser.php',{cache: true,params: { username: username}})
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

     //get user Medias
     $scope.getUserMedias = function(){
       var username = $routeParams.username;
     $http.get('http://localhost:8080/instagram/getUserMedias.php',{cache: true,params: { username: username}})
     .success(function(response){
         $scope.medias = response;
        console.log($scope.medias);
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
