/* global angular */

var routerFun = function($stateProvider, $urlRouterProvider ){
    
    $urlRouterProvider.otherwise('/sudoku');
    $urlRouterProvider.when('/sudoku','/choose_numbers');
    
    $stateProvider
    .state('sudoku',{templateUrl: './base.html'})
    .state('sudoku.choose_size',{url:'/choose_size'  , templateUrl: './choose_size.html'})
    .state('sudoku.choose_numbers',{url:'/choose_numbers' ,templateUrl: './choose_numbers.html'})
    .state('sudoku.solve',{url:'/solve' ,templateUrl: './solve.html'})
    ;
};

angular.module('app').config(routerFun);