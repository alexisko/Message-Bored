angular.module('app')
  .controller('getTopicsController', ['$scope', 'TopicService',
    function($scope, TopicService) {
      TopicService.getTopics()
        .then(topics => {
          console.log("CONTROLLER TOPICS", topics);
        });
  }])
  .controller('createTopicController', ['$scope', 'TopicService',
    function($scope, TopicService) {

  }])
  .controller('updateTopicController', ['$scope', 'TopicService',
    function($scope, TopicService) {

  }]);