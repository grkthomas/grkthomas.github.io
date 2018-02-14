/* global angular */

var routerFun = function($stateProvider, $urlRouterProvider ){
    
    $urlRouterProvider.otherwise('/sudoku');
    $urlRouterProvider.when('/sudoku','/choose_size');
    
    $stateProvider
    .state('sudoku',
        {templateUrl: './base.html',controller:sudoku_Ctrl,controllerAs:'vm'}
    )
    .state('sudoku.choose_size',
        {url:'/choose_size'  , templateUrl: './choose_size.html'}
    )
    .state('sudoku.choose_numbers',
        {url:'/choose_numbers' ,templateUrl: './choose_numbers.html'}
    )
    ;
};

angular.module('app').config(routerFun);