const express = require('express');
const usersControler = require('./users/router');

const root = express.Router({ mergeParams: true });

root.use('/users', usersControler);

module.exports = root;