tuister.controller('Comments', function($scope, $http, fileUpload)
{
	$scope.comment = 
	{
		body: "",
		user_id: 0,
		post_id: 0
	}
	$scope.paramsComments = 
	{
		headers: {'token': window.localStorage.getItem("token")}
	}
	$scope.commentId = 0;
	$scope.obtenerComments = function()
	{
		$http.get("http://tuister.com/comments", $scope.paramsComments).then(function(response)
			{
				$scope.comments = response.data[0];
				console.log($scope.comments);
			});
	}
	
	$scope.obtenerComments();

	$scope.uploadFileComment = function(postId)
	{

		$scope.comment.user_id = parseInt(window.localStorage.getItem("userid"));
		$scope.comment.post_id = postId;
		var data = $scope.comment;
		var file = $scope.myCommentFile;
		if($scope.myCommentFile)
		{		
			var uploadUrl = "http://tuister.com/comment";
			fileUpload.uploadFileToUrl(file, uploadUrl, data, $scope.paramsComments).then(function(response)
			{
				window.location.reload();
			});
		} 
		else
		{
			$http.post("http://tuister.com/comment", $scope.comment, $scope.paramsComments).then(function(response)
			{
				window.location.reload();
			});
		}
	}
	$scope.setComment = function(userId)
	{
		$scope.commentId = userId;
		$http.get("http://tuister.com/comment/"+userId, $scope.paramsComments).then(function(response)
			{
				$scope.dataComment = 
				{
					body: response.data.body
				}
			});
	}
	$scope.editComment = function()
	{
		$http.put("http://tuister.com/comment/"+$scope.commentId, $scope.dataComment, $scope.params).then(function(response)
		{
			window.location.reload();
		});
	}
	$scope.deleteComment = function()
	{
		$http.delete("http://tuister.com/comment/"+$scope.commentId, $scope.params).then(function(response)
		{
			window.location.reload();
		});
	}

});