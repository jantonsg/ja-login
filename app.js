var app = angular.module('videogallery', []);

//CONFIG
app.value('USERNAME', 'miusername');
app.value('PASSWORD', 'mipassword');

//CONTROLLERS
app.controller('videogalleryController',
	['$scope','$window','$location','LoginService', function
	( $scope , $window , $location , LoginService ){

		$scope.login = function(){
			
			if (LoginService.checkLogin($scope.user)){
				var mensaje = 'Hola ' + $scope.user.username + ', bienvenid@ a nuestra plataforma';
				localStorage.setItem('user', JSON.stringify({'username': $scope.user.username, 'isLogged':true}));
				$window.alert(mensaje);
				$location.path('/board');
			}else{
				$window.alert('Your credentials are wrong');
				$location.path('/');
			}
			
		}

		$scope.user = {
			username: 'Maria',
			password: 'patata'
		}
}]);

//SERVICES
app.factory('LoginService', 
	['USERNAME','PASSWORD', function
	( USERNAME , PASSWORD) {

		function checkLogin(user){
			if (user.username === USERNAME && user.password === PASSWORD){
				return true;
			}
		}

		return {
			checkLogin: checkLogin
		};

}]);