tuister.controller('Demo', function($scope, $http, fileUpload)
{
	$scope.mostrarNombre = function(a1)
	{
		$scope.alumno = 
		{
			nombre : a1.nombre,
			matricula : a1.matricula,
			calificacion : a1.calificacion
		}
	}
	// $scope.hola = "Hola desde index";
	// $scope.nombre = "";
	// $scope.nombres = ["Ulises", "Andree", "esewey"];
	// $scope.alumnos = [
	// 	{
	// 		"nombre": "Platanito",
	// 		"matricula": 1301150013,
	// 		"calificacion": 6
	// 	},
	// 	{
	// 		"nombre": "Chuponcito",
	// 		"matricula": 1301150085,
	// 		"calificacion": 8
	// 	},
	// 	{
	// 		"nombre": "Bananito",
	// 		"matricula": 1903150013,
	// 		"calificacion": 9
	// 	}
	// ];
});
