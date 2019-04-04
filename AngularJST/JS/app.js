var tuister = angular.module('tuister', ['ngRoute'])
.config(function($routeProvider, $locationProvider)
{
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/info/:id',
	{
		controller: 'Info',
		templateUrl: 'info.html'	
	})
	.when('/signup',
	{
		controller: 'Signup',
		templateUrl: 'createUser.html'	
	})
	.when('/login',
	{
		controller: 'Signup',
		templateUrl: 'login.html'	
	})
	.when('/posts',
	{
		controller: 'Posts',
		templateUrl: 'posts.html'	
	})
	.otherwise("/login");
})