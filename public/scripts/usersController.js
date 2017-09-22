angular.module('app')
  .controller('getUsersController', ['$scope', 'UserService',
    function($scope, UserService) {
      $scope.users = [];
      UserService.getUsers()
        .then(users => {
          console.log("CONTROLLER USERS", users);
          $scope.users = users;
        });
  }])
  .controller('newUserController', ['$scope', 'UserService',
    function($scope, UserService) {
      console.log("newUserController");
      $scope.username = '';
      $scope.addUser = function() {
        let newUser = {
          username: $scope.username
        };

        console.log("NEW USER", newUser);

        UserService.addNewUser(newUser)
          .then(user => {
            console.log("CONTROLLER NEW USER", user);
          });

        $scope.username = '';
      };
    }]);