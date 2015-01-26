var app = angular.module('aerovod', ['ui.router'])

.config(function($httpProvider) {

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$httpProvider.defaults.headers.common["Accept"] = "application/json";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/json";

})

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            template: 'Dynamically resolved object'
        })

})

.controller('MainController', function($scope){

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

    return vm;

});

