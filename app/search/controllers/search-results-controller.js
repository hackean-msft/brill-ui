(function() {
	var app = angular.module("brill")
	// Controllers
	app.controller("SearchResultsController", SearchResultsController)
	SearchResultsController.$inject = ["$scope", "$stateParams"]
	function SearchResultsController($scope, $stateParams) {
		$scope.search = function () {

		}
	}
}())
