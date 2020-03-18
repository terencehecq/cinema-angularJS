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

    const loadMovies = () => {
      $scope.loading = true;
      serviceAjax
        .popular($scope.currentPage)
        .then((res) => {
          $scope.movies = res.data.results;
          $scope.totalPages = res.data.total_pages;
          $scope.loading = false;
        })
        .catch((err) => {console.log(err)})
    }

    $scope.pageChanged = function(){
      loadMovies();
    };
    loadMovies();
  });
