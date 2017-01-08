(function() {
	var app = angular.module("brill")
	app.service("DocumentService", DocumentService)
	DocumentService.$inject = ["$http", "DOCUMENT_MANAGER_HOST"]

	function DocumentService($http, DOCUMENT_MANAGER_HOST) {
		this.getAllDocuments = function(successHandler, failureHandler) {
			$http.get(DOCUMENT_MANAGER_HOST + "/documents").then(successHandler, failureHandler)
		}

		this.upload = function(data, successHandler, failureHandler){
      var httpVar = $http({
                      method: 'POST',
                      url: DOCUMENT_MANAGER_HOST + "/upload",
                      data: data,
                      headers: {'Content-Type': undefined}
                  }, successHandler, failureHandler)
    }
	}
}())
