guiApp.controller('createCtrl', 
  function ($window, $scope, $state, $http, $stateParams){

    $scope.loginUser = function(){
      var url = 'http://10.1.36.149:4000/users';
      var details = { user: {username: $scope.username, password: $scope.password, auth_token: $scope.auth_token}};
      console.log(details)
      $http
      .post(url, details)
      .success(function (data, status, headers, config) {
        console.log(data)
      })
      .error(function (data, status, headers, config) {
        console.log(data, status, headers, config)
        // Handle login errors here
        $scope.message = 'Some error occurred, try again.';
      });
    }

});
