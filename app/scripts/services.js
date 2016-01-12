'use strict';

angular.module('postitBoardBackApp').factory('Postit', ['$resource',
    function($resource) {
        var baseurl = 'http://172.16.0.8:8080/app_dev.php/postits';
        var headers = { 'Authorization': 'Basic ' + btoa('back:backPourTrav')};
        return $resource(
            baseurl,
            {},
            {
                list: {method:'GET', isArray: false, headers: headers},
                get:  {method:'GET', url: baseurl + '/:id', isArray: false, headers: headers},
                update: {method:'PUT',url: baseurl + '/:id', isArray: false, headers: headers},
                delete: {method:'DELETE', url: baseurl + '/:id', isArray: false, headers: headers}
            }

        );
    }
]
);
