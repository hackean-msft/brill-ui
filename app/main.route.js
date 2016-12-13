(function() {
		var app = angular.module("brill")
		app.config(RouteConfig)
		RouteConfig.$inject = ["$stateProvider", "$urlProvider"]

		function RouteConfig($stateProvider, $urlProvider){
			$stateProvider.state('search', {
				"url":"/search"
				"templateUrl":"app/search/search.html"
			})
		}
}())
