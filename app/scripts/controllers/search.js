'use strict';

/**
 * @ngdoc function
 * @name cinemaAngularJsApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cinemaAngularJsApp
 */
angular.module('cinemaAngularJsApp')
    .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) { // Use "function" because ()=>{} pops an error
        $scope.query = $routeParams.query;
        $scope.currentPage = 1;
        $scope.totalPages = 0;
        $scope.loading = true;
        $scope.orderByPredicate = "title";
        $scope.orderByReverse = false;

        var loadMovies = function(){ 
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

        $scope.clickPredicateName = function(){
            $scope.orderByReverse = !$scope.orderByReverse;
            $scope.orderByPredicate = 'title';
        }

        $scope.clickPredicateRate = function(){
            $scope.orderByReverse = !$scope.orderByReverse;
            $scope.orderByPredicate = 'vote_average';
        }
        
        loadMovies();
    });
