angular.module('app')
  .service('TopicService', ['$http', function($http) {
    this.getTopics = function () {
      return $http.get('/api/topics')
        .then(topics => {
          return topics.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.addTopic = function () {

    };

    this.updateTopic = function() {

    };
  }]);