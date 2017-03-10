'use strict';

angular.module('instaPage.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post/:media_code', {
    templateUrl: 'post/post.html',
    controller: 'postCtrl'
  });
}]).
filter('createAnchors', function ($sce) {
    return function (str) {
        if(!str){
          return str;
        }
        return $sce.trustAsHtml(str.
                                replace(/#(\S*)/g,'<a href="#/tag/$1">#$1</a>').
                                replace(/@(\S*)/g,'<a href="#/user/$1">@$1</a>')
                               );
    }
}).
controller('postCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  var media_code = $routeParams.media_code;
  $scope.loadingMedia = true;
  $scope.loadingComment = true;
  $scope.loadingError = false;
  $scope.getMedia = function(){
  $http.get('http://localhost:8080/instagram/getMedia.php',{cache: true, params: { media_code: media_code}})
    .success(function(response){
        $scope.media = response;
      })
      .catch(function (err) {
       $scope.loadingError = true;
     })
     .finally(function () {
       // Hide loading spinner whether our call succeeded or failed.

        $scope.loadingMedia = false;
     });
  }
  $scope.getMediaComments = function(){
  $http.get('http://localhost:8080/instagram/getMediaComment.php',{cache: true, params: { media_code: media_code}})
  .success(function(response){
      $scope.mediaComments = response;
    })
    .catch(function (err) {

   })
   .finally(function () {
     // Hide loading spinner whether our call succeeded or failed.

      $scope.loadingComment = false;
   });
  }
}]);
