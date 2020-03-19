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
    $scope.pagination = { currentPage: 1 };
    $scope.totalPages = 0;
    $scope.loading = true;

    const loadMovies = function(){
      $scope.loading = true;
      serviceAjax
        .popular($scope.pagination.currentPage)
        .then(function(res){
          let data = res.data;
          $scope.movies = data.results;
          $scope.totalPages = data.total_pages;
          $scope.loading = false;
        })
        .catch(function(err){console.log(err)});
    };

    $scope.pageChanged = function(){
      loadMovies();
    };
    loadMovies();
  });
