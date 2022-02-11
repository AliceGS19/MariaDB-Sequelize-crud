const { StatusCodes } = require('http-status-codes');
const { update, getById } = require('../../services/users');

module.exports = async (req, res, next) => {
    try {
      const { name, email, password , roleId } = req.body;

      const { id } = req.params;

      const user = await getById(id);

      if (!user) return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' })
      
      await update({ name, email, password, roleId }, id)

      return res.status(StatusCodes.NO_CONTENT).end()
    } catch (error) {
      next(error)
    }
}