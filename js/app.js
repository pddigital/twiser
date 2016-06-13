angular.module('twiser', ['ui.router', 'ngMaterial', 'angularMoment'])

.config(function( $stateProvider, $urlRouterProvider, $mdThemingProvider ) {

	$stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  })
  .state('userDash', {
    url: '/dashboard',
    templateUrl: './views/userDash.html',
    controller: 'dashCtrl'
  })
	.state('about', {
		url: '/about',
		templateUrl: './views/about.html',
	})

  $urlRouterProvider.otherwise('/');

	$mdThemingProvider.theme('default')
		.backgroundPalette('blue-grey');
})

.constant('twitterUserShow', {
	requestUrl: 'https://api.twitter.com/1.1/users/show.json?screen_name='
})
.constant('twitterAuthUser', {
	requestUrl: 'https://api.twitter.com/1.1/account/verify_credentials.json'
})
