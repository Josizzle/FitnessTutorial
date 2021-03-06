'use strict';

var fitnessTutorialControllers = angular.module('fitnessTutorialControllers', []);

fitnessTutorialControllers.controller('navbarCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('exercises/muscleGroups.json').success(function(data) {
            $scope.muscleGroups = data;
            $scope.orderProp = 'muscleGroup';
        });
        $http.get('exercises/exercises.json').success(function(data) {
            $scope.exercises = data;
            $scope.orderProp = 'name';
            setTimeout(function(){ 
                $('.chosen-select').chosen();    
            },
            0);
        });
    }]);

fitnessTutorialControllers.controller('homeCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('exercises/muscleGroups.json').success(function(data) {
            $scope.muscleGroups = data;
        });
        $scope.orderProp = 'muscleGroup';
    }]);

fitnessTutorialControllers.controller('groupCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('exercises/exercises.json').success(function(data) {
            $scope.exercises = data;
            $scope.filterParam = $routeParams;
            $scope.orderProp = 'name';
        });
    }]);

fitnessTutorialControllers.controller('allCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('exercises/exercises.json').success(function(data) {
            $scope.exercises = data;
            $scope.orderProp = 'name';
        });
    }]);

fitnessTutorialControllers.controller('detailsCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('exercises/' + $routeParams.exerciseId + '.json').success(function(data) {
            $scope.exercise = data;
        });
    }]);

