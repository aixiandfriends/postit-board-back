'use strict';

angular.module('postitBoardBackApp').factory('Postit', ['$resource',
    function($resource) {
        var baseurl = 'http://172.16.0.8:8080/app_dev.php/:verb';
        return $resource(
            baseurl,
            {},
            {
                list: {method:'GET', params: {verb: 'postits'}, isArray: false, transformResponse: transformGet },
                get:  {method:'GET', url: baseurl + '/:postitId', params: { postitId:'1', verb: 'postits'}, isArray: false, transformResponse: transformGet },
                update: {method:'GET', params: {verb: 'postits'}, isArray: false, transformResponse: transformGet },
            }

        );
    }
]
);

function transformGet(json, headerGetter) {
    var fromJson = angular.fromJson(json);
    console.log(fromJson);
    //json.id = json._id.$id;
    fromJson.json = json ;
    return fromJson;
}