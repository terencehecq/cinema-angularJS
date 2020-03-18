'use strict';

/**
 * @ngdoc function
 * @name cinemaAngularJsApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the cinemaAngularJsApp
 */
angular.module('cinemaAngularJsApp')
  .controller('PopularCtrl', function ($scope, serviceAjax) {
    $scope.currentPage = 1;
    $scope.totalPages = 0;
    $scope.loading = true;

    const loadMovies = function(){
      $scope.loading = true;
      serviceAjax
        .popular($scope.currentPage)
        .then(function(res){
          let data = res.data;
          $scope.loading = false;
          $scope.movies = data.results;
          $scope.totalPages = data.total_pages;
        })
        .catch(function(err){console.log(err);});
    };

    $scope.pageChanged = function(){
      loadMovies();
    };
    loadMovies();
  });
