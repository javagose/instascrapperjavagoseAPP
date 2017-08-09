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
service("userService",
function($http) {
  return {
    getUserInfo: function(username) {
       var user = {};
       $http.get('http://localhost:8080/instagram/getUser.php',{cache: true,params: { username: username}})
     .success(function(response){
      
       user.userInfo = response;
       user.isPrivate= response.isPrivate;
       })
       .catch(function (err) {
        // Log error somehow.
        user.loadingError = true;
      })
      .finally(function () {
        // Hide loading spinner whether our call succeeded or failed.

      });
      return user;
    }
  };
}).
controller('userCtrl', ['$scope', '$http', '$location', '$routeParams', 'userService', function($scope, $http, $location, $routeParams, userService) {
    console.log("controller called ...");
    var username = $routeParams.username;
    $scope.loadingUser = true;
    $scope.isPrivate = true;
    $scope.loadingError = false;
    //get user informations info
     $scope.getUser = function(){
      var user = userService.getUserInfo(username);
      $scope.user = user.userInfo;
      $scope.isPrivate= user.isPrivate;
      $scope.loadingError = user.loadingError;
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
