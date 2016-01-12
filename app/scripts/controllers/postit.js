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
          Postit.list(function (response) {
              $scope.postits = response;
          })
      }
    ]
  )
    .controller('PostitEditCtrl', [
        '$scope', '$routeParams', 'Postit',
          function ($scope, $routeParams,  Postit) {
              Postit.get({id: $routeParams.postitId}, function(response) {
                  $scope.postit = response;
              });
              $scope.update = function() {
                  Postit.update({id: $scope.postit._id}, {'post_it': {'message': $scope.postit.message}});
              }
          }
    ])
;
