app.directive('navigation', function(){

	return {
		restrict: 'E',
		templateUrl: 'app/shared/navigation/navigationView.html',	// put out full qualified URL from index
		link: function(scope, element, attrs){
			element.children()[0].focus();
		},
		controller: function($scope) {

			//document.getElementById("navigation").focus();
			/*
			$scope.keyDown = function($event) {
				alert("Unhandled key, code: "+ $event.keyCode);
			};
			*/
			var vm = this;

			vm.ahoj = function($event) {
				alert('ahoj ++' + $event.keyCode);
			};
			/*
			var vm = this;

			// NAVIGATION ================
		    var tvKey = new SmartTv.KeyValues();

		    vm.keyDown = function($event) {

		        switch( $event.keyCode )
		        {
		            case tvKey.KEY_RETURN:
		            case tvKey.KEY_PANEL_RETURN:
		                widgetAPI.blockNavigation(event);
		                vm.back();
		            break;
		            case tvKey.KEY_LEFT:
		                vm.left();
		            break;
		            case tvKey.KEY_RIGHT:
		                vm.right();
		            break;
		            case tvKey.KEY_UP:
		                vm.up();
		            break;
		            case tvKey.KEY_DOWN:
		                vm.down();
		            break;
		            case tvKey.KEY_ENTER:
		            case tvKey.KEY_PANEL_ENTER:
		                vm.enter();
		            break;

		            case 71:
		                // play
		                vm.play();
		            break;

		            case 74:
		                // pause
		                vm.pause();
		            break;

		            default:
		                alert("Unhandled key, code: "+ $event.keyCode);
		            break;
		        }
		    };

		    vm.up = function() {
		        $rootScope.$broadcast('up');
		    };

		    vm.down = function() {
		        $rootScope.$broadcast('down');
		    };

		    vm.left = function() {
		        $rootScope.$broadcast('left');
		    };

		    vm.right = function() {
		        $rootScope.$broadcast('right');
		    };

		    vm.enter = function() {
		        $rootScope.$broadcast('enter');
		    };

		    vm.back = function() {
		        $rootScope.$broadcast('back');
		    };

		    vm.play = function() {
		        $rootScope.$broadcast('play');
		    };

		    vm.back = function() {
		        $rootScope.$broadcast('back');
		    };
		    */
		},
		controllerAs: 'navigation'
	};

});