angular.module('app')
.controller('addMessageController', ['$scope', '$location', 'MessageService',
  function($scope, $location, MessageService) {
    $scope.body = '';

    var path = $location.path().split('/');
    var topicId = parseInt(path[path.length - 1]);
    var authorId = window.localStorage.getItem("user_id");


    $scope.addMessage = function() {
      let newMessage = {
        body: $scope.body,
        topic_id: topicId,
        author_id: authorId
      };

      MessageService.addMessage(newMessage)
        .then(msg => {

        });

      $scope.body = '';
    };
}])
.controller('getTopicMsgsController', ['$scope', '$location', 'MessageService',
 function($scope, $location, MessageService) {
  var path = $location.path().split('/');
  var id = parseInt(path[path.length - 1]);

  $scope.messages = [];

  MessageService.getTopicMsgs(id)
    .then(msgs => {
      console.log("MESSAGES", msgs);
      $scope.messages = msgs;
    });
}])
.controller('getLatestMsgsController', ['$scope', 'MessageService',
  function($scope, MessageService) {
    $scope.messages = [];

    MessageService.getLatestMsgs()
      .then(msgs => {
        console.log("LATEST MESSAGES", msgs);
        $scope.messages = msgs;
      });
  }]);