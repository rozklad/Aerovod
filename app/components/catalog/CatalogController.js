app.controller('MainController', function($http, $log) {
	
	var vm = this; // vm contains viewmodel
	
	/*
	vm.movies = [
	             {
	            	 title: 'Nymfomanka: 1. část',
	            	 rating: '60%'
	             },
	             {
	            	 title: 'Nymfomanka: 2. část',
	            	 rating: '70%'
	             }
	];
	*/
	
	$http.get('http://4bar.cz/xml/items.json').
		success(function(data){
			vm.movies = data;
		}).
		error(function(data){
			
		});
});