const express = require('express')

const list = require('./list');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const getById = require('./getById');

const { users: { authBody, authEmail } } = require('../../middlewares')

const router = express.Router({ mergeParams: true });

router.get('/', list);

router.delete('/:id', remove);

router.get('/:id', getById);

router.use(authBody);

router.use(authEmail);

router.post('/', create);

router.put('/:id', update);

module.exports = router