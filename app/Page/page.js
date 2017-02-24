'use strict';

angular.module('myApp.page', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'page/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log("controller called ...");
  $scope.loadingHomeSearch = true;
  $scope.loadingError = false;
  var tag_name1 = "celebrities";
  var tag_name2 = "lifestyle";
  var tag_name3 = "fashion";
  var tag_name4 = "igers";
  var tag_name5 = "yummy";

   $scope.getTag1Medias = function(){
   $http.get('http://localhost:8080/instagram/getTopMediaByTags.php',{params: { tag_name: tag_name1}}).success(function(response){
       $scope.medias1 = response;
       console.log("success");
     });
   }
   $scope.getTag2Medias = function(){
   $http.get('http://localhost:8080/instagram/getTopMediaByTags.php',{params: { tag_name: tag_name2}}).success(function(response){
       $scope.medias2 = response;
       (adsbygoogle = window.adsbygoogle || []).push({});
       console.log("success");
     });
   }
   $scope.getTag3Medias = function(){
   $http.get('http://localhost:8080/instagram/getTopMediaByTags.php',{params: { tag_name: tag_name3}}).success(function(response){
       $scope.medias3 = response;
       console.log("success");
     });
   }
   $scope.getTag4Medias = function(){
   $http.get('http://localhost:8080/instagram/getTopMediaByTags.php',{params: { tag_name: tag_name4}}).success(function(response){
       $scope.medias4 = response;
       console.log("success");
     });
   }
   $scope.getTag5Medias = function(){
   $http.get('http://localhost:8080/instagram/getTopMediaByTags.php',{params: { tag_name: tag_name5}})
   .success(function(response){
       $scope.medias5 = response;
       console.log("success");
     })
     .catch(function (err) {
      // Log error somehow.
        $scope.loadingError = true;
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.
      $scope.loadingHomeSearch = false;
    });
   }
}]);
