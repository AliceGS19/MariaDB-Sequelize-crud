const error = require('./error');

const authBody = require('./users/authBody');
const authEmail = require('./users/authEmail');

module.exports = {
    users: {
        authBody,
        authEmail
    },
    error
}