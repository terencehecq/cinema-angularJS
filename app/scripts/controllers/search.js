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
        $scope.title = "Résultats de la recherche"
        $scope.query = $routeParams.query;
        $scope.currentPage = 1;
        $scope.totalPages = 0;
        $scope.loading = true;
        $scope.order = '';

        const loadMovies = function(){ 
            $scope.loading = true;
            serviceAjax
            .search($scope.query, $scope.currentPage)
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
