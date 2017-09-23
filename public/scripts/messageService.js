angular.module('app')
  .service('MessageService', ['$http', function($http) {
    // Get all messages that belong to specified topic from db
    this.getTopicMsgs = function(id) {
      return $http.get(`/api/messages/by-topic/${id}`)
        .then(msgs => {
          return msgs.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    // Gets last 10 messages along from db
    this.getLatestMsgs = function() {
      return $http.get('/api/messages/latest')
        .then(msgs => {
          console.log("MSGSERVICE", msgs);
          return msgs.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    // Adds a new message to the db
    this.addMessage = function(newMessage) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http.post('/api/messages', newMessage, config)
        .then(msg => {
          console.log("NEW MESSAGE BITCH", msg);
          return msg.data;
        })
        .catch(err => {
          console.log(err);
        });
    };
  }]);