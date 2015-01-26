app.factory('Movie', function($http) {
    return {
        get : function() {
            return $http.get('http://aerovod.multizone.cz/apistream?weeboapi=alias&fn=NettvApi::movies&genre=1');
        }
    }
});