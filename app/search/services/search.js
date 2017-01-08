(function() {
	var app = angular.module("brill")
	app.service("SearchService", SearchService)

	SearchService.$inject = ["$http", "SEARCH_ENGINE_HOST"]

	function SearchService($http, SEARCH_ENGINE_HOST){
		this.search = function (query, success, failure) {
			$http.get(SEARCH_ENGINE_HOST + "/?q="+query).then(success, failure)
		}
	}
}())
