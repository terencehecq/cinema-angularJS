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
    'ngMessages',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
