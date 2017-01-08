(function () {
	var app = angular.module("brill")
	app.controller("DocumentManagerController", DocumentManagerController)
	DocumentManagerController.$inject = ["$scope", "DocumentService"]

	function DocumentManagerController($scope, DocumentService) {
		$scope.doc = {}
		$scope.init = function(){
			DocumentService.getAllDocuments(function(data) {
				var result = data.data
				$scope.documents = result
			},
			function(data) {
				console.log(data)
			})
		}

		$scope.upload = function() {
			var formData = new FormData()
			formData.append("title", $scope.doc.title)
			formData.append("description", $scope.doc.description)
			formData.append("document", document.getElementById("document").files[0])
			formData.append("coverImage", document.getElementById("coverImage").files[0])
			DocumentService.upload(
				formData,
				function(data){
					console.log(data)
					$("#modal_theme_primary").modal("hide")
				},
				function(data){
					console.log(data)
					$("#modal_theme_primary").modal("hide")
				}
			)
		}
	}

}())
