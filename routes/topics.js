const express = require('express');
const router = express.Router();
const db = require('../models');
const Topic = db.Topic;

router.route('/')
  // Respond with all topics including the creator's name
  .get((req, res) => {
    Topic.findAll()
      .then(topics => {
        res.send(topics);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  })
  // Create and respond with a new topic
  .post((req, res) => {
    Topic.create({
      name: req.body.name,
      created_by: req.body.created_by
    })
      .then(topic => {
        res.send(topic);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  });

router.route('/:id')
  // Update and respond with the updated topic
  .put((req, res) => {
    Topic.update({
      name: req.body.name
    }, {
      where: {
        id: parseInt(req.params.id)
      }
    })
      .then(topic => {
        res.send(topic);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  });

  module.exports = router;