// Create the module
var granola = angular.module('granola', ['ngRoute']);

granola.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'templates/home.html',
        controller  : 'mainController'
    })

    .when('/login', {
        templateUrl : 'templates/login.html',
        controller  : 'loginController'
    })
    .otherwise({ redirectTo: '/'});
});

granola.controller('homeController', function($scope) {
    $scope.message = 'Home!';
});

granola.controller('loginControler', function($scope) {
    $scope.message = 'Login!';
});

