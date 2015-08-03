angular.module('wuffApp', [
  'ngRoute'
]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/scanner', {
          templateUrl: 'templates/scanner.html',
          controller: 'scannerCtrl'
      }).
      when('/map', {
          templateUrl: 'templates/map.html',
          controller: 'mapCtrl'
      }).
      otherwise({
        redirectTo: '/map'
      });
  }]);
