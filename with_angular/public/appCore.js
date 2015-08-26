var guiApp = angular.module('ssad', ['ui.router',]);

guiApp.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('view-users', {
      url: '/view-users',
      templateUrl: 'view-users.html',
      controller: 'ViewUsersCtrl'
    });
    $stateProvider.state('create', {
      url: '/create',
      templateUrl: 'create.html',
      controller: 'createCtrl'
    });

  $urlRouterProvider.otherwise('/view-users');
}]);
