tuister.controller('Likes', function($scope, $http)
{
	$scope.postLike = 
	{
		user_id: 0,
		post_id: 0
	}
	$scope.commentLike = 
	{
		user_id: 0,
		comment_id: 0
	}
	$scope.params = 
	{
		headers: {'token': window.localStorage.getItem("token")}
	}
	$scope.darLike = function(id)
	{
		$scope.postLike.user_id = parseInt(window.localStorage.getItem("userid"));
		$scope.postLike.post_id = id;
		$http.post(
			"http://tuister.com/likePost",
			$scope.postLike,
			$scope.params
		).then(function(response)
			{	
				$scope.respuesta = response.data;
				console.log(response);
				console.log($scope.respuesta);
		});
		window.location.reload();
	}
	$scope.darCommentLike = function(id)
	{
		$scope.commentLike.user_id = parseInt(window.localStorage.getItem("userid"));
		$scope.commentLike.comment_id = id;
		//alert($scope.commentLike.comment_id+" "+$scope.commentLike.user_id);
		$http.post(
			"http://tuister.com/likeComment",
			$scope.commentLike,
			$scope.params
		).then(function(response)
		{	
			$scope.respuesta = response.data;
			console.log(response);
			console.log($scope.respuesta);
			window.location.reload();
		});
	}
});