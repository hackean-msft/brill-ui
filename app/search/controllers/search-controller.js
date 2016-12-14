(function () {
	var app = angular.module("brill")

	app.controller("SearchController", SearchController)

	SearchController.$inject = ["$scope", "$state"]
	function SearchController($scope, $state) {
		$scope.search = function (searchQuery) {
			$state.go("search-results", {q: searchQuery})
		}
	}

}())
