const express = require('express');
const router = express.Router();
const db = require('../models');
const { Message, Topic, User } = db;

router.route('/')
  // Create and respond with the new message
  .post((req, res) => {
    Message.create({
      body: req.body.body,
      author_id: req.body.author_id,
      topic_id: req.body.topic_id
    })
      .then(message => {
        res.send(message);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  });

router.route('/latest')
  // Respond with the latest 10 messages including the name
  // of the topic including the author's name
  .get((req, res) => {
    Message.findAll({
      include: [{
        model: Topic,
        as: 'Topic'
      },
      {
        model: User,
        as: 'Author'
      }],
      limit: 10,
      order: [['createdAt', 'DESC']]
    })
      .then(messages => {
        res.send(messages);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  });

router.route('/by-topic/:topic_id')
  // Respond with all messages that belong to the topic by :topic_id
  // including the author's name, topic's name, ordered by createdAt ascending
  .get((req, res) => {
    Message.findAll({
      include: [{
        model: Topic,
        as: 'Topic',
        where: {
          id: req.params.topic_id
        }
      },
      {
        model: User,
        as: 'Author'
      }],
      order: [['createdAt', 'ASC']]
    })
      .then(messages => {
        res.send(messages);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  });

module.exports = router;