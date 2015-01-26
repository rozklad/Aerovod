app.controller('MovieController', function($http, $log, $rootScope, Movie) {
	
	var vm = this; // vm contains viewmodel
	
	$rootScope.$broadcast('loading');

	Movie.get()
		.success(function(response){
			vm.movies = response.data;
			$rootScope.$broadcast('loaded')
		})
		.error(function(response){
			// error
		});
});
