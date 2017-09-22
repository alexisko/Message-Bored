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

    this.getUserMsgs = function(id) {
      return $http.get(`/api/users/${id}`)
        .then(user => {
          return user.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.loginUser = function (username) {
      return $http.get(`/api/users/find/${username}`)
        .then(user => {
          return user.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.logoutUser = function() {

    };
  }]);