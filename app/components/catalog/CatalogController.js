app.controller('CatalogController', function($http, $log, Movie) {
	
	var vm = this; // vm contains viewmodel
	
	Movie.get()
		.success(function(response){
			vm.movies = response.data;
		})
		.error(function(response){
			// error
		});
});