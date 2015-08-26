guiApp.controller('createCtrl', 
  function ($window, $scope, $state, $http, $stateParams){

    $scope.loginUser = function(){
      var url = 'http://localhost:4000/users';
      var details = { user: {email: $scope.username, password: $scope.password, auth_token: $scope.auth_token}};
      console.log(details)
      $http
      .post(url, details)
      .success(function (data, status, headers, config) {
        console.log(data);
	$scope.message = "User created successfully";
      })
      .error(function (data, status, headers, config) {
        console.log(data, status, headers, config)
        // Handle login errors here
        $scope.message = 'Some error occurred, try again.';
      });
    }

});