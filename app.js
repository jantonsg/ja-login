var app = angular.module('angularLogin', []);

app.controller('angularLoginController', 
	['$scope','$window','$location', function
	( $scope , $window , $location ){

		$scope.login = function(){
			var mensaje = 'Hola ' + $scope.user.username + ', bienvenid@ a nuestra plataforma';
			// Put the object into storage
			$window.alert(mensaje);
			$location.path('/board');
		}

		$scope.user = {
			username: 'Maria',
			password: 'patata'
		}
}]);