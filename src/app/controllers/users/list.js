const { StatusCodes } = require('http-status-codes');
const { list } = require('../../services/users');

module.exports = async (req, res, next) => {
    try { 
      const users = await list()

      if(!users.length) return res.status(StatusCodes.NOT_FOUND).json({ message: 'No registered user' })

      return res.status(StatusCodes.OK).json(users)
    } catch (error) {
      next(error)
    }
}