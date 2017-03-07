'use strict';

angular.module('instaPage.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tag/:tag_name', {
    title : function(params){ return params.tag_name+" instagram Photos and videos";},
    templateUrl: 'search/tag.html',
    controller: 'tagCtrl'
  });
  $routeProvider.when('/search/:name', {
    title : function(params){ return params.name+" users, Photos and videos";},
    templateUrl: 'search/searchresults.html',
    controller: 'searchCtrl'
  });
}])

.controller('tagCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log("controller called ...");
  var tag_name = $routeParams.tag_name;
  $scope.loadingTag = true;
  $scope.loadingTopTag=  true;
  $scope.getTopTagMedias = function(){
  $http.get('http://localhost:8080/instagram/getTopMediaByTags.php',{params: { tag_name: tag_name}})
  .success(function(response){
       $scope.topMedias = response;
       $scope.tag_name = tag_name;
      console.log("Top success");
      console.log(response);
    })
    .catch(function (err) {
     // Log error somehow.
   })
   .finally(function () {
     // Hide loading spinner whether our call succeeded or failed.

     $scope.loadingTopTag= false;
   });
  }
   $scope.getTagMedias = function(){
   $http.get('http://localhost:8080/instagram/getMediaByTags.php',{params: { tag_name: tag_name}})
   .success(function(response){
        $scope.medias = response;
       console.log("success");
     })
     .catch(function (err) {
      // Log error somehow.
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.

       $scope.loadingTag = false;
    });
   }

}])

.controller('searchCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log("controller called ...");
  var name = $routeParams.name;

    var emptyUser = false;
    var emptyTopTags = false;
    var emptyTags = false;

    $scope.loadingTagSearch = true;
    $scope.loadingUserSearch = true;
    $scope.loadingTopTagSearch = true;

    $scope.loadingErrorUser = false;
    $scope.loadingErrorTopTag = false;
    $scope.loadingErrorTag = false;

   $scope.getUsersbyUsername = function(){
   $http.get('http://localhost:8080/instagram/getUsersbyUsername.php',{params: { username: name}})
   .success(function(response){
     if (response == [] || response == null) {
       emptyUser = true;
     }
       $scope.users = response;
       $scope.tag_name = name;
       console.log("success");
     }).catch(function (err) {
      $scope.loadingErrorUser = true;
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.

       $scope.loadingUserSearch = false;
    });
   }
   $scope.getTopTagMedias = function(){
   $http.get('http://localhost:8080/instagram/getTopMediaByTags.php',{params: { tag_name: name}})
   .success(function(response){
        $scope.topMedias = response;
       console.log("Top success");
     })
     .catch(function (err) {
      // Log error somehow.
      $scope.loadingErrorTopTag = true;
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.

      $scope.loadingTopTagSearch = false;
    });
   }
   $scope.getTagMedias = function(){
   $http.get('http://localhost:8080/instagram/getMediaByTags.php',{params: { tag_name: name}})
   .success(function(response){
        $scope.medias = response;
        console.log(response);
       console.log("success");
     })
     .catch(function (err) {
      // Log error somehow.
      $scope.loadingErrorTopTag = false;
      console.log("err");
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.
      $scope.loadingTagSearch = false;
    });
   }

}])
