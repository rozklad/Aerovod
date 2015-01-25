app.controller('CatalogController', function($http, $log, Movie) {
	
	var vm = this; // vm contains viewmodel
	
	vm.movies = Movie.get()
		.success(function(data){
			return data.data;
		})
		.error(function(data){

		});
});