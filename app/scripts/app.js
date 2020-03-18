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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
