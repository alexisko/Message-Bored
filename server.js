// PACKAGES
const express = require('express');
const bp = require('body-parser');

// DEV-CREATED FILES
const db = require('./models');

// FILES
const PORT = process.env.PORT || 8080;
const CONFIG = require('./config/config.json');

const app = express();

// DB
const { User, Topic, Message } = db;

// User.hasMany(Topic, { foreignKey: 'created_by' });
// User.hasMany(Message, { foreignKey: 'author_id'});
// Topic.hasMany(Message, { foreignKey: 'created_by'});

// ROUTERS
const usersRouter = require('./routes/users.js');
const topicsRouter = require('./routes/topics.js');
const messagesRouter = require('./routes/messages.js');

// BODY-PARSER
app.use(bp.urlencoded({extended:true}));

// PUBLIC STATIC FILES
app.use(express.static('public'));

// ROUTES
app.use('/api/users', usersRouter);
app.use('/api/topics', topicsRouter);
app.use('/api/messages', messagesRouter);

// SERVER
const server = app.listen(PORT, () => {
  db.sequelize.sync({force:true});
  console.log(`SERVER: Listening on ${PORT}`);
});