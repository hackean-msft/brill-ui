(function() {
	var app = angular.module("brill")
	// Controllers
	app.controller("SearchResultsController", SearchResultsController)
	SearchResultsController.$inject = ["$scope", "$stateParams", "SearchService"]
	function SearchResultsController($scope, $stateParams, SearchService) {

		$scope.search = function (query) {
			SearchService.search(query, searchSuccess,searchFailure)
		}

		$scope.showSummary = function(document){
			$scope.documentInFocus = document
		}

		$scope.init = function () {
			var query = $stateParams.q
			$scope.searchQuery = query 
			SearchService.search(query, searchSuccess, searchFailure)
		}


		searchSuccess = function(data) {
				var result = data.data
				console.log(result)
				$scope.documentAmount = result.size
				$scope.documents = result.documents
			}

		searchFailure = function(data){
				console.log(data)
		}

	}
}())
