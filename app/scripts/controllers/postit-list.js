'use strict';

/**
 * @ngdoc function
 * @name postitBoardBackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the postitBoardBackApp
 */
angular.module('postitBoardBackApp')
  .controller('PostitListCtrl', [
      '$scope', 'Postit',
      function ($scope, Postit) {
          $scope.postits = Postit.list();
      }
    ]
  );
