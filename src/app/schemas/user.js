const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  roleId: Joi.number()
});