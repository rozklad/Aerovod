app.directive('menu', function(){

	return {
		restrict: 'E',
		templateUrl: 'app/shared/menu/menuView.html',	// put out full qualified URL from index
		replace: true,
		controller: function($scope, $state) {

			// LIST OF MENU ITEMS ==========

			$scope.menus = [
				{
					title : 'Aktuální filmy',
					sref : 'home',
					root : 'home',
				},
				{
					title : 'Katalog filmů',
					sref : 'catalog.movies',
					root : 'catalog.movies',
				},
				{
					title : 'Nejsledovanější',
					sref : 'movie.top',
					root : 'movie.top',
				},			
				{
					title : 'O Aerovodu',
					sref : 'about.show',
					root : 'about.show',
				},	
				{
					title : 'Moje filmy',
					sref : 'movie.my',
					root : 'movie.my',
				},
				{
					title : 'Přihlášení',
					sref : 'login.sign',
					root : 'login.sign',
				},
			];

			// NAVIGATION ================

			$scope.position = 0;

			$scope.$on('down', function() {
			    $scope.position++;
			    if ( $scope.position > $scope.menus.length - 1 ) {
					// If user scrolls down after last element
					// return him up
					$scope.position = 0;
				}
				$scope.$broadcast('positionChanged');
			});

			$scope.$on('up', function() {
				$scope.position--;
				if ( $scope.position < 0 ) {
					// If user scrolls up before first element
					// return him down
					$scope.position = $scope.menus.length - 1;
				}
				$scope.$broadcast('positionChanged');
			});

			$scope.$on('positionChanged', function(){
				$state.go($scope.menus[$scope.position]['sref']);
			});

			$scope.isActive = function(root) {
				return $state.includes(root);
			};

		},
		controllerAs: 'menu'
	};

});
