guiApp.controller('ViewUsersCtrl', function ($window, $scope, $http, $state, $timeout){
  
  $scope.message = '';

  var url = 'http://localhost:4000/users';

  $http({url: url, method: 'GET'})
  .success(function(data, status, headers, config) {
    console.log(data);
    $scope.users = data;
  })
  .error(function(data, status, headers, config) {
    $scope.message = 'Some error occurred, try again.';
  })

});
