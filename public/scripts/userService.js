angular.module('app')
  .service('UserService', ['$http', function($http) {
    this.getUsers = function () {
      return $http.get('/api/users')
        .then(users => {
          return users.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.addNewUser = function (newUser) {
      var config = {
        headers: {
          'Accept': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      var newObj = `username=${newUser.username}`;

      return $http.post('/api/users/join', newObj, config)
        .then(user => {
          console.log("SERVICE ADD USER", user);
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.loginUser = function () {

    };

    this.logoutUser = function() {

    };
  }]);