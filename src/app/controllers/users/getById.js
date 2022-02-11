const { StatusCodes } = require('http-status-codes');
const { getById } = require('../../services/users');

module.exports = async (req, res, next) => {
    try {
      const { id } = req.params
      
      const user = await getById(id)

      if(!user) return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' })

      return res.status(StatusCodes.OK).json(user)
    } catch (error) {
      next(error)
    }
}