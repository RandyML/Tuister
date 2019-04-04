tuister.controller('Info', function($scope, $routeParams)
{
	$scope.valor = "hola desde info";
	$scope.dato = $routeParams.id;
	alert("tu id es el "+$scope.dato);
});