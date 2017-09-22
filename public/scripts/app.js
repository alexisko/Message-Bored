angular.module('app', ['ngRoute']);

angular.module('app')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/users', {
        templateUrl: 'user-list.html',
        controller: 'getUsersController'
      })
      .when('/users/join', {
        templateUrl: 'join.html',
        controller: 'newUserController'
      })
      .when('/api/users/:id', {
        templateUrl: 'temp.html',
        controller: 'usersController'
      })
      .when('/api/topics/:id', {
        templateUrl: 'temp.html'
      })
      .when('/api/messages/latest', {
        templateUrl: 'temp.html'
      });

    $locationProvider.html5Mode(true);
}])
.run(['APP_VERSION', '$rootScope',
 function(APP_VERSION, $rootScope){
    $rootScope.version = APP_VERSION;
}]);