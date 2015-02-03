app.controller('MainController', function($scope, $rootScope, Movie, $document, $window, $state){

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

    // KEEP TRACK OF STATES ======
    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
        $rootScope.from = from;
        $rootScope.fromParams = fromParams;
    });

    // PASSWORD ==================
    $rootScope.password = {
        code: ''
    };

    $rootScope.$on('number', function(event, args){
        var number = args.number;
        $rootScope.password.code = $rootScope.password.code + args.number.toString();
        alert($rootScope.password.code);
    });

    // NAVIGATION ================
    var tvKey = new Sanatorium.KeyValues();

    app.navigation.init(vm, $rootScope);    // Configures vm and $rootScope for navigation

    vm.keyDown = function($event) {         // Sends keydown event to navigation controller
        app.navigation.keyDown($event);
    };

    $scope.xposition = 0;
    $rootScope.activeMain = false;
    $scope.activeMovie = 0;

    $scope.$on('right', function() {

        if ( $scope.xposition < $rootScope.movies.length + 1 ) {
            // Activate main area
            $rootScope.$broadcast('mainActivated');
        }

        // Navigate on xposition if main scope is active
        if ( $rootScope.activeMain && $scope.xposition < $rootScope.movies.length ) {
            $scope.xposition++;
            $scope.activeMovie++;
        }
    });

    $scope.$on('left', function() {
        // Navigate on xposition if main scope is active
        if ( $rootScope.activeMain ) {
            $scope.xposition--;
            $scope.activeMovie--;
        }

        if ( $scope.xposition < 1 ) {
            // Deactivate main area
            $rootScope.$broadcast('mainDeactivated');
        }
    });

    $scope.$on('mainActivated', function() {
        $rootScope.activeMain = true;
    });

    $scope.$on('mainDeactivated', function() {
        $rootScope.activeMain = false;
        $scope.xposition = 0;
        $scope.activeMovie = 0;
    });

    $scope.$on('enter', function(){

        if ( $rootScope.activeMain && $scope.activeMovie > 0 ) {

            var movie = $rootScope.movies[$scope.activeMovie - 1];
            $state.go('movie.show', {id: movie['id_item']});

        } else {

        }

    });

    $scope.$on('canplay', function(){
        alert('We can play from controller');
    });

    $scope.$on('play', function(){
        //$scope._video = document.getElementById("video");
        $rootScope.Player.play();
    });

    $scope.$on('pause', function(){
        $rootScope.Player.pause();
    });

    $scope.$on('stop', function(){
        $rootScope.Player.stop();
    });

    $scope.$on('volumeUp', function(){
        $rootScope.Player.volumeUp();
    });

    $scope.$on('volumeDown', function(){
        $rootScope.Player.volumeDown();
    });

    $scope.$on('mute', function(){
        $rootScope.Player.mute();
    });

    $scope.$on('fastforward', function(){
        $rootScope.Player.fastforward();
    });

    $scope.$on('rewind', function(){
        $rootScope.Player.rewind();
    });

    $scope.$on('fullscreen', function(){
        $rootScope.Player.fullscreen();
    });


    // go back to menu OR return to smartHUB (TV apps menu)
    $scope.$on('back', function(){

        $state.go($rootScope.from, $rootScope.fromParams);

        //Sanatorium.exit();

    });

    return vm;

});
