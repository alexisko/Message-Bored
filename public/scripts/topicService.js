angular.module('app')
  .service('TopicService', ['$http', function($http) {
    //
    this.getTopics = function () {
      return $http.get('/api/topics')
        .then(topics => {
          return topics.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    // Finds specified topic by id in db
    this.getATopic = function(id) {
      return $http.get(`/api/topics/${id}`)
        .then(topic => {
          return topic.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    // Add a new topic to db
    this.addTopic = function (name, id) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      var newTopic = {
        "name": name,
        "created_by": id
      };

      return $http.post('/api/topics', newTopic, config)
        .then(topic => {
          return topic.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    // Update topic in db
    this.updateTopic = function(topic, id) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      var updatedTopic = {
        "name": topic
      };

      return $http.put(`/api/topics/${id}`, updatedTopic, config)
        .then(topic => {
          console.log("NEW TOPIC");
          return topic.data;
        })
        .catch(err => {
          console.log(err);
        });
    };
  }]);