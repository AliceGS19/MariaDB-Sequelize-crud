const express = require('express');
const { error } = require('./app/middlewares');
const root = require('./app/controllers/root');

const app = express();

app.use(express.json());

app.use('/', root);

app.use(error);

module.exports = app