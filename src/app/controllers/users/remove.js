const { remove } = require('../../services/users');

module.exports = async (req, res, next) => {
    try {
      const { id } = req.params
      
      await remove(id)

      return res.status(204).end()
    } catch (error) {
      next(error)
    }
}