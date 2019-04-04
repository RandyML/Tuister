tuister.controller('Signup', function($scope, $http)
{
	$scope.usuario = 
	{
		name: "",
		email: "",
		nickname: "",
		password: ""
	}
	$scope.logeado = false;
	if( (window.localStorage.getItem("token") != undefined) && (window.localStorage.getItem("userid")!= undefined) )
	{
		$scope.logeado = true;
		window.location.href = "#/posts";
	}
	$scope.paramsUsers = 
	{
		headers: {'token': window.localStorage.getItem("token")}
	}
	$scope.crearUsuario = function()
	{
		if( ($scope.usuario.password == $scope.comprobar.password) )
		{
			
			$http.post("http://tuister.com/user", $scope.usuario).then(function(response)
			{
				$scope.respuesta = response.data;
				console.log($scope.respuesta);
				window.location.href = "#/login";
			});
		}
		else
		{
			alert("Las contraseñas deben coincidir");
			document.getElementById("p1").value="";
			document.getElementById("p2").value="";
		}
		
	}
	
	$scope.iniciarSesion = function()
	{
		$http.post("http://tuister.com/login", $scope.usuario).then(function(response)
		{
			$scope.respuesta = response.data;
			console.log(response);
			console.log($scope.respuesta);
			
			window.localStorage.setItem("token", $scope.respuesta.token);
			window.localStorage.setItem("userid", $scope.respuesta.id);
			window.location.href = "#/posts";
			window.location.reload();
		});
	}

	$scope.cerrarSesion = function()
	{
		$http.post("http://tuister.com/logout/"+window.localStorage.getItem("userid")).then(function(response)
		{
			//$scope.respuesta = response.data;
			window.localStorage.removeItem("token");
			window.localStorage.removeItem("userid");
			window.location.href = "#/login";
			window.location.reload();
		});
	}

});