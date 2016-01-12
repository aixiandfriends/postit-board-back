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
              $scope.delete = function (id) {
                    Postit.delete({id: id},
                    function(response) {
                        delete $scope.postits[id];
                    });

                }
          })
      }
    ]
  )
    .controller('PostitEditCtrl', [
        '$scope', '$routeParams', '$location', 'Postit',
          function ($scope, $routeParams, $location,  Postit) {
              Postit.get({id: $routeParams.postitId}, function(response) {
                  $scope.postit = response;
              });
              $scope.update = function() {
                  Postit.update({id: $scope.postit._id}, {'post_it': {'message': $scope.postit.message}});
              }

              $scope.delete = function (id) {
                  Postit.delete({id: id},
                      function(response) {
                          $location.path('/');
                  });

              }
          }
    ])
;
