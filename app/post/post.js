'use strict';

angular.module('myApp.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post/:media_code', {
    templateUrl: 'post/post.html',
    controller: 'postCtrl'
  });
}])

.controller('postCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  var media_code = $routeParams.media_code
  $scope.getMedia = function(){
  $http.get('http://localhost:8080/instagram/getMedia.php',{params: { media_code: media_code}}).success(function(response){
      $scope.media = response;
    });
  }
  $scope.getMediaComments = function(){
  $http.get('http://localhost:8080/instagram/getMediaComment.php',{params: { media_code: media_code}}).success(function(response){
      $scope.mediaComments = response;
    });
  }
}]);
