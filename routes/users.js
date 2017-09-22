const express = require('express');
const router = express.Router();
const db = require('../models');
const { User, Message } = db;

router.route('/')
  // Responds with all users
  .get((req, res) => {
    User.findAll()
      .then(users => {
        console.log("USERS:", users);
        res.send(users);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  });

router.route('/join')
// Create and respond with a new user
  .post((req, res) => {
    console.log(req);
    console.log("HELLO IM ON MY POSt", req.body);
    User.create({
      username: req.body.username
    })
      .then(user => {
        console.log("NEW USER:", user);
        res.send(user);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  });

router.route('/:id')
  // Respond with user and all messages author'd by this user
  .get((req, res) => {
    User.findById(req.params.id, {
      include: [{
        model: Message,
        as: 'Author'
      }]
    })
      .then(user => {
        console.log("USER ID", user);
        res.send(user);
        res.end();
      })
      .catch(err => {
        console.log(err);
      });
  });

  module.exports = router;