// Create the module
var granola = angular.module('granola', ['ngRoute']);

granola.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'templates/home.html',
        controller  : 'homeController'
    })

    .when('/login', {
        templateUrl : 'templates/login.html',
        controller  : 'loginController'
    })
    .otherwise({ redirectTo: '/'});
});

granola.controller('homeController', function($scope) {

});


