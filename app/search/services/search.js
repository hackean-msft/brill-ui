(function() {
	var app = angular.module("brill")
	app.service("SearchService", SearchService)

	SearchService.$inject = ["$http"]

	function SearchService($http){
		this.search = function (query, success, failure) {
			$http.get("/app/mocks/search.json").then(success, failure)
		}
	}
}())
