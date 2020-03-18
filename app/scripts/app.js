'use strict';

/**
 * @ngdoc overview
 * @name cinemaAngularJsApp
 * @description
 * # cinemaAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('cinemaAngularJsApp', [
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: 'views/movies.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .when('/search/:query', {
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        // controllerAs: 'info'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
