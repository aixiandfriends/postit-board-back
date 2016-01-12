'use strict';

describe('Controller: PostitListCtrl', function () {
  // load the controller's module
  beforeEach(module('postitBoardBackApp'));

  var PostitListCtrl,
    scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://172.16.0.8:8080/app_dev.php/postits')
          .respond({
              "5694d7a1f8d3f2f71a8b456d": {"_id":{"$id":"5694d7a1f8d3f2f71a8b456d"}, "message":"ticket Content"}
          });
      scope = $rootScope.$new();
      PostitListCtrl = $controller('PostitListCtrl', {
        $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should return list of tickets', function () {
    expect(PostitListCtrl.tickets.length).toBe(1);
  });
});
