app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
        
        // ABOUT STATES AND NESTED VIEWS =======================================
        .state('about', {
        	abstract: true,
        	url: '/about',
        	templateUrl: 'app/components/about/view.html'
        })

        .state('about.show', {
            url: '',	// (because '/about' + '')
            templateUrl: 'app/components/about/index.html',	// this will be injected into parent's (view.html) ui-view
            resolve: {
                html: ['About', function(About) {

                    return About.get()
                        .success(function(data){
                            return data;
                        });
                }]
            },
            controller: function ($scope, html) {

                $scope.html = html.data.html; 
            }
        });

});
