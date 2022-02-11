const { StatusCodes } = require('http-status-codes');
const { remove } = require('../../services/users');

module.exports = async (req, res, next) => {
    try {
      const { id } = req.params
      
      await remove(id)

      return res.status(StatusCodes.NO_CONTENT).end()
    } catch (error) {
      next(error)
    }
}