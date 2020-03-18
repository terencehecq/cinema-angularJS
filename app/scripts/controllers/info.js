'use strict';

/**
 * @ngdoc function
 * @name cinemaAngularJsApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the cinemaAngularJsApp
 */
angular.module('cinemaAngularJsApp')
.controller('InfoCtrl', function ($scope, $routeParams, serviceAjax) {
  var id = $routeParams.id;
  $scope.loading = true;
  serviceAjax.info(id).then(function(res){
    $scope.loading = false;
    $scope.movie = res.data;
  }).catch(function(err){console.error(err)})
  });
