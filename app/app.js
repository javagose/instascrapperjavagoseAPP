
'use strict';

// Declare app level module which depends on views, and components
angular.module('instaPage', [
  'ngRoute',
  'instaPage.user',
  'instaPage.post',
  'instaPage.search',
  'instaPage.page',
  'instaPage.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  
  $routeProvider.otherwise({redirectTo: '/'});
}]).
controller('SearchCtrl', [ "$scope", "$location", function($scope, $location) {
  $scope.searchVal = "";
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
directive('googleAdsRec', [
  '$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        return $timeout(function() {
          var adsbygoogle, html, rand;
          rand = Math.random();
          html = "<ins class='adsbygoogle' style='display:block;width:263px;height:263px' data-ad-client='ca-pub-8477133660268783' data-ad-slot='7627552352' data-ad-region='page-" + rand + "'></ins>";
          $(element).append(html);
          return (adsbygoogle = window.adsbygoogle || []).push({});
        });
      }
    };
  }
]).
directive('googleAdsLb', [
  '$timeout', function($timeout) {
    return {
      restrict: 'E',
      link: function(scope, element, attr) {
        return $timeout(function() {
          var adsbygoogle, html, rand;
          rand = Math.random();
          html = "<ins class='adsbygoogle LeaderboardAds' style='display:block;' data-ad-client='ca-pub-8477133660268783' data-ad-slot='7229806358'  data-ad-format='auto' data-ad-region='page-" + rand + "'></ins>";
          $(element).append(html);
          return (adsbygoogle = window.adsbygoogle || []).push({});

        });
      }
    };
  }
]).
run(['$rootScope', '$route', '$routeParams', function($rootScope, $route, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function() {
       if(!!$route.current.title) {
           if(typeof $route.current.title == 'function') {
               document.title = $route.current.title($routeParams);
           } else if (typeof $route.current.title == 'string') {
               document.title = $route.current.title;
           }

       }
    });
}]);
