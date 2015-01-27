app.controller('MainController', function($scope, $rootScope, Movie, $document){

    var vm = this; // vm stands for viewmodel
    
    // LOADING ======================
    // use $rootScope.$broadcast('loading'); to show data is loading
    // use $rootScope.$broadcast('loaded'); to show data was loaded
    // when loading = 0 (false), root loading "spinner" will dissapear
    vm.loading = 0; 

    $scope.$on('loading', function() {
        vm.loading++;
    });
    $scope.$on('loaded', function() {
        vm.loading--;
    });

    $rootScope.$broadcast('loading');

    // INDEX =====================
    Movie.news()
        .success(function(data){
            $rootScope.$broadcast('loaded');
            $rootScope.movies = data.data;
        });


    // NAVIGATION ================
    var tvKey = new Common.API.TVKeyValue();

    vm.keyDown = function($event) {

        switch( $event.keyCode )
        {
            case tvKey.KEY_RETURN:
            case tvKey.KEY_PANEL_RETURN:
                alert("RETURN");
                widgetAPI.sendReturnEvent();
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
                alert("ENTER");
            break;
            default:
                alert("Unhandled key");
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

    $scope.xposition = 0;
    $scope.activeMain = false;
    $scope.activeMovie = 0;

    $scope.$on('right', function() {
        
        if ( $scope.xposition < $rootScope.movies.length + 1 ) {
            // Activate main area
            $rootScope.$broadcast('mainActivated');
        }

        // Navigate on xposition if main scope is active
        if ( $scope.activeMain && $scope.xposition < $rootScope.movies.length ) {
            $scope.xposition++;
            $scope.activeMovie++;
        }
    });

    $scope.$on('mainActivated', function() {
        $scope.activeMain = true;
    });

    $scope.$on('left', function() {
        // Navigate on xposition if main scope is active
        if ( $scope.activeMain ) {
            $scope.xposition--;
            $scope.activeMovie--;
        }

        if ( $scope.xposition < 1 ) {
            // Deactivate main area
            $rootScope.$broadcast('mainDeactivated');
        }
    });

    $scope.$on('mainDeactivated', function() {
        $scope.activeMain = false;
        $scope.xposition = 0;
        $scope.activeMovie = 0;
    });

    return vm;

});