var guiApp = angular.module('ssad', ['ui.router',]);

guiApp.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('view-users', {
      url: '/view-users',
      templateUrl: './public/partials/view-users.html',
      controller: 'ViewUsersCtrl'
    });
    $stateProvider.state('create', {
      url: '/create',
      templateUrl: './public/partials/create.html',
      controller: 'createCtrl'
    });

  $urlRouterProvider.otherwise('/view-users');
}]);