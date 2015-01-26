app.directive('menu', function(){

	return {
		restrict: 'E',
		templateUrl: 'app/shared/menu/menuView.html',	// put out full qualified URL from index
		replace: true,
		controller: function($scope, $state) {

			$scope.menus = [
				{
					title : 'Aktuální filmy',
					sref : 'home',
					root : 'home',
				},
				{
					title : 'Katalog filmů',
					sref : 'catalog',
					root : 'catalog',
				},
				{
					title : 'Nejsledovanější',
					sref : 'movies.top',
					root : 'movies.top',
				},			
				{
					title : 'O Aerovodu',
					sref : 'about.show',
					root : 'about.show',
				},	
				{
					title : 'Moje filmy',
					sref : 'movies.my',
					root : 'movies.my',
				},
				{
					title : 'Přihlášení',
					sref : 'login',
					root : 'login',
				},
			];

			$scope.isActive = function(root) {
				return $state.includes(root);
			};

		},
		controllerAs: 'menu'
	};

});