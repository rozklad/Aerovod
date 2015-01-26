app.factory('About', function($http) {
    return {
        get : function() {
            return $http.get('http://aerovod.multizone.cz/apistream?weeboapi=alias&fn=NettvApi::about');
        }
    }
});