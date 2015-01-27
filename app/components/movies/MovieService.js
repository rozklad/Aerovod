app.factory('Movie', function($http) {
    return {
        get : function() {
            return $http.get('http://aerovod.multizone.cz/apistream?weeboapi=alias&fn=NettvApi::movies');
        },
        news: function() {
        	return $http.get('http://aerovod.multizone.cz/apistream?weeboapi=alias&fn=NettvApi::news');
        },
        find : function() {

        }
    }
});