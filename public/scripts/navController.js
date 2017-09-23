angular.module('app')
  .controller('navController', ['$scope',
    function($scope) {
      $scope.loggedIn = function() {
        if(window.localStorage.getItem("user_id") !== null) {
          return true;
        } else {
          return false;
        }
      };
  }]);