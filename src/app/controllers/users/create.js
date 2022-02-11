const { StatusCodes } = require('http-status-codes');
const { create } = require('../../services/users');

module.exports = async (req, res, next) => {
    try {
      const { name, email, password , roleId } = req.body;
      
      await create({ name, email, password, roleId })

      return res.status(StatusCodes.CREATED).json({ message: 'User created successfully'})
    } catch (error) {
      next(error)
    }
}