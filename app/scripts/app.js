'use strict';

/**
 * @ngdoc overview
 * @name postitBoardBackApp
 * @description
 * # postitBoardBackApp
 *
 * Main module of the application.
 */
angular
  .module('postitBoardBackApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/postit-list.html',
        controller: 'PostitListCtrl',
        controllerAs: 'postit-list'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
