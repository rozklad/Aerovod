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
                html: ['About', '$rootScope', function(About, $rootScope) {

                    $rootScope.$broadcast('loading');
                    return About.get()
                        .success(function(data){
                            $rootScope.$broadcast('loaded');
                            return data;
                        });
                }]
            },
            controller: function ($scope, $sce, html) {

                $scope.trusted = $sce.trustAsHtml(html.data);
            }
        })

        // MOVIE STATES AND NESTED VIEWS =======================================
        .state('movie', {
            abstract: true,
            url: '/movie',
            templateUrl: 'app/components/movies/view.html'
        })

        .state('movie.top', {
            url: '/top',
            templateUrl: 'app/components/movies/top.html'
        })

        .state('movie.my', {
            url: '/my',
            templateUrl: 'app/components/movies/my.html'
        })

        .state('movie.show', {
            url: '/detail/{id:[0-9]{1,4}}',
            templateUrl: 'app/components/movies/show.html', // this will be injected into parent's (view.html) ui-view
            resolve: {
                movie: ['Movie', '$stateParams', '$rootScope', function(Movie, $stateParams, $rootScope) {

                    var movies = $rootScope.movies;

                    // todo: reload

                    for ( var key in movies ) {
                        if ( movies[key]['id_item'] == $stateParams.id ) {
                            return movies[key];
                        }
                    }
                }]
            },
            controller: function ($scope, movie, $rootScope) {

                $scope.movie = movie;

                alert('Before init fired');
                $rootScope.Player = Sanatorium.VideoPlayer;
                $rootScope.Player.init(document.getElementById("video"));
            }
        })

        // CATALOG STATES AND NESTED VIEWS =======================================
        .state('catalog', {
            abstract: true,
            url: '/catalog',
            templateUrl: 'app/components/catalog/view.html'
        })

        .state('catalog.movies', {
            url: '/movies',
            templateUrl: 'app/components/catalog/index.html', // this will be injected into parent's (view.html) ui-view
            resolve: {
                movies: ['Movie', '$stateParams', '$rootScope', function(Movie, $stateParams, $rootScope) {

                    $rootScope.$broadcast('loading');
                    return Movie.get()
                        .success(function(data){
                            $rootScope.$broadcast('loaded');
                            return data;
                        });
                }]
            },
            controller: function ($scope, movies) {

                $scope.movies = movies.data.data;
            }
        })

        // LOGIN STATES AND NESTED VIEWS =======================================
        .state('login', {
            abstract: true,
            url: '/login',
            templateUrl: 'app/components/login/view.html'
        })

        .state('login.sign', {
            url: '',
            templateUrl: 'app/components/login/index.html'
        });

});

