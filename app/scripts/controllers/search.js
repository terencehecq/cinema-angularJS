'use strict';

/**
 * @ngdoc function
 * @name cinemaAngularJsApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cinemaAngularJsApp
 */
angular.module('cinemaAngularJsApp')
    .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) {
        $scope.query = $routeParams.query;
        $scope.currentPage = 1;
        $scope.totalPages = 0;

        var loadMovies = () => {
            serviceAjax
            .search($scope.query, $scope.currentPage)
            .then(function(res){
                $scope.movies = res.data.results;
                $scope.totalPages = res.data.total_pages;
            })
            .catch((err)=> console.log(err))
        };

        $scope.pageChanged = function(){
            loadMovies();
        };
        
        loadMovies();
    });
