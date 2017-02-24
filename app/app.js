
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.user',
  'myApp.post',
  'myApp.search',
  'myApp.page',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]).
controller('SearchCtrl', [ "$scope", "$location", function($scope, $location) {
  $scope.searchVal = ""
  $scope.submit = function (){
    $location.path('/search/'+$scope.searchVal);
  }
  console.log("search val");

}]).
directive('googleAdRec', function() {
  return {
    restrict: 'EA',
    templateUrl: 'template/rectangleAds'
  };
}).
directive('errorMessage', function() {
  return {
    restrict: 'EA',
    templateUrl: 'template/ErrorMessage'
  };
}).
directive('emptyResponse', function() {
  return {
    restrict: 'EA',
    templateUrl: 'template/EmptyResponse'
  };
}).
directive('googleAds', [
  '$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        return $timeout(function() {
          var adsbygoogle, html, rand;
          rand = Math.random();
          html = "<ins class='adsbygoogle' style='display:inline-block;width:263px;height:263px' data-ad-client='ca-pub-8477133660268783' data-ad-slot='7627552352' data-ad-region='page-" + rand + "'></ins>";
          $(element).append(html);
          return (adsbygoogle = window.adsbygoogle || []).push({});
        });
      }
    };
  }
]);
