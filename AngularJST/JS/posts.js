tuister.controller('Posts', function($scope, $http, fileUpload)
{
	$scope.post = 
	{
		title: "",
		body: "",
		user_id: 0
	}
	$scope.params = 
	{
		headers: {'token': window.localStorage.getItem("token")}
	}
	$scope.postId = 0;
	$scope.obtenerPosts = function()
	{
		$http.get("http://tuister.com/posts").then(function(response)
			{
				$scope.posts = response.data[0];
				console.log($scope.posts);
			});
	}
	$scope.identificado = parseInt(window.localStorage.getItem("userid"));
	$scope.obtenerPosts();
	$scope.uploadFile = function()
	{
		$scope.post.user_id = parseInt(window.localStorage.getItem("userid"));
		var data = $scope.post;
		var file = $scope.myFile;
		if($scope.myFile)
		{		
			var uploadUrl = "http://tuister.com/post";
			fileUpload.uploadFileToUrl(file, uploadUrl, data).then(function(response)
			{
				$scope.posts = response.data[0];
				window.location.reload();
			});
		} 
		else
		{
			$http.post("http://tuister.com/post", $scope.post, $scope.params).then(function(response)
			{
				$scope.posts = response.data[0];
				window.location.reload();
				
			});
		}
	}
	$scope.setPost = function(userId)
	{
		$scope.postId = userId;
		$http.get("http://tuister.com/post/"+userId).then(function(response)
			{
				$scope.dataPost = 
				{
					title: response.data.title,
					body: response.data.body
				}
			});

	}
	$scope.editPost = function()
	{
		$http.put("http://tuister.com/post/"+$scope.postId, $scope.dataPost, $scope.params).then(function(response)
		{
			window.location.reload();
		});
	}
	$scope.deletePost = function()
	{
		$http.delete("http://tuister.com/post/"+$scope.postId, $scope.params).then(function(response)
		{
			window.location.reload();
		});
	}

});