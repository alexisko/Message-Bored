angular.module('app')
  .service('UserService', ['$http', function($http) {
    // Get all users from db
    this.getUsers = function () {
      return $http.get('/api/users')
        .then(users => {
          return users.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    // Add new user to db
    this.addNewUser = function (newUser) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http.post('/api/users/join', newUser, config)
        .then(user => {
          console.log("SERVICE ADD USER", user);
        })
        .catch(err => {
          console.log(err);
        });
    };

    // Get all messages from specified user
    this.getUserMsgs = function(id) {
      return $http.get(`/api/users/${id}`)
        .then(user => {
          return user.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    // Search for user in db for login
    this.loginUser = function (username) {
      return $http.get(`/api/users/find/${username}`)
        .then(user => {
          return user.data;
        })
        .catch(err => {
          console.log(err);
        });
    };
  }]);