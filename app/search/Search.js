'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tag/:tag_name', {
    templateUrl: 'search/tag.html',
    controller: 'tagCtrl'
  });
  $routeProvider.when('/search/:name', {
    templateUrl: 'search/searchresults.html',
    controller: 'searchCtrl'
  });
}])

.controller('tagCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log("controller called ...");
  var tag_name = $routeParams.tag_name;
   $scope.getTagMedias = function(){
   $http.get('http://localhost:8080/instagram/getMediaByTags.php',{params: { tag_name: tag_name}}).success(function(response){
       $scope.medias = response;
       console.log("success");
     });
   }
}])

.controller('searchCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log("controller called ...");
  var name = $routeParams.name;
   $scope.getUsersbyUsername = function(){
   $http.get('http://localhost:8080/instagram/getUsersbyUsername.php',{params: { username: name}}).success(function(response){
       $scope.users = response;
       console.log("success");
     });
   }
   $scope.getTagMedias = function(){
   $http.get('http://localhost:8080/instagram/getMediaByTags.php',{params: { tag_name: name}}).success(function(response){
       $scope.medias = response;
       console.log("success");
     });
   }
}])
