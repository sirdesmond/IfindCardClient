'use strict';

angular
  .module('ifindCardApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ifindCardApp.restServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
