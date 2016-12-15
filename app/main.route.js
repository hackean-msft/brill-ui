(function() {
		var app = angular.module("brill")
		RouterConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
		app.config(RouterConfig)

		function RouterConfig($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise("/")
			$stateProvider
							.state('search', {
											url:"/",
											templateUrl:"app/search/views/search.html"
							})
							.state("search-results", {
											url:"/search?q",
											templateUrl: "app/search/views/search-results.html"
							})
							.state("document-manager", {
											url:"/document-manager",
											templateUrl: "app/document/views/document-manager.html"
							})
		}

}())
