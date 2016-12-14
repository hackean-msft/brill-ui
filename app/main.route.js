(function() {
		var app = angular.module("brill")
		RouterConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
		app.config(RouterConfig)

		function RouterConfig($stateProvider, $urlRouterProvider){
			$stateProvider.state('search', {
				url:"/search",
				templateUrl:"app/search/search.html"
			})

			$urlRouterProvider.when("/")
		}
}())
