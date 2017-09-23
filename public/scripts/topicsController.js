angular.module('app')
  // NEED TO WORK ON THIS
  .controller('getTopicsController', ['$scope', 'TopicService',
    function($scope, TopicService) {
      TopicService.getTopics()
        .then(topics => {
          console.log("CONTROLLER TOPICS", topics);
        });
  }])
  .controller('getATopicController', ['$scope', '$location', 'TopicService',
    function($scope, $location, TopicService) {
      var path = $location.path().split('/');
      var id = parseInt(path[path.length - 1]);

      TopicService.getATopic(id)
        .then(topic => {
          $scope.topic = topic;
        });
  }])
  .controller('createTopicController', ['$scope', 'TopicService',
    function($scope, TopicService) {
      $scope.addTopic = function() {
        var userId = parseInt(window.localStorage.getItem("user_id"));
        TopicService.addTopic($scope.name, userId)
          .then(topic => {

          });
      };
  }])
  .controller('updateTopicController', ['$scope', '$location', 'TopicService',
    function($scope, $location, TopicService) {
      var path = $location.path().split('/');
      var id = parseInt(path[path.length - 1]);

      $scope.updateTopic = function() {
        TopicService.updateTopic($scope.name, id)
          .then(topic => {

          });
      };
  }]);