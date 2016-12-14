(function() {
		var app = angular.module("brill")
		RouterConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
		app.config(RouterConfig)

		function RouterConfig($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise("/")
			$stateProvider
							.state('search', {
											url:"/",
											templateUrl:"app/search/search.html"
							})
							.state("search-results", {
											url:"/search",
											templateUrl: "app/search/search-results.html"
							})
		}

}())
