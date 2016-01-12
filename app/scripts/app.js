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
        controllerAs: 'postit'
      })
      .when('/postits/:postitId', {
        templateUrl: 'views/postit-edit.html',
        controller: 'PostitEditCtrl',
        controllerAs: 'postit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
