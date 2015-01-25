app.factory('Catalog', function($http) {
    return {
        get : function() {
            return $http.get('api/git');
        }
    }
});