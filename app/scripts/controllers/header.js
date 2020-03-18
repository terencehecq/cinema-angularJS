'use strict';

/**
 * @ngdoc function
 * @name cinemaAngularJsApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the cinemaAngularJsApp
 */
angular.module('cinemaAngularJsApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.query = ""
    $scope.searchAction = function(){
        $location.path("/search/" + $scope.query);
    }
  });
