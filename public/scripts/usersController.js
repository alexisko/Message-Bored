angular.module('app')
  .controller('getUsersController', ['$scope', 'UserService',
    function($scope, UserService) {
      $scope.users = [];
      UserService.getUsers()
        .then(users => {
          $scope.users = users;
        });
  }])
  .controller('newUserController', ['$scope', 'UserService',
    function($scope, UserService) {
      $scope.username = '';

      $scope.addUser = function() {
        let newUser = {
          username: $scope.username
        };

        UserService.addNewUser(newUser)
          .then(user => {
          });

        $scope.username = '';
      };
    }])
  .controller('getUserMsgsController', ['$scope', '$location', 'UserService',
    function($scope, $location, UserService) {
      var path = $location.path().split('/');
      var id = parseInt(path[path.length - 1]);

      $scope.messages = [];

      UserService.getUserMsgs(id)
        .then(user => {
          $scope.user = user.username;
          $scope.messages = user.Author;
        });
  }])
  .controller('loginUserController', ['$scope', 'UserService',
    function($scope, UserService) {
      $scope.login = function() {
        UserService.loginUser($scope.username)
          .then(user => {
            window.localStorage.setItem("user_id", user.id);
            $scope.username = '';
          });
      };
  }])
  .controller('logoutUserController', ['$scope', 'UserService',
    function($scope, UserService) {
      $scope.logout = function() {
        window.localStorage.removeItem("user_id");
      };
    }]);