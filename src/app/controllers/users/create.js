const { create } = require('../../services/users');

module.exports = async (req, res, next) => {
    try {
      const { name, email, password , roleId } = req.body;
      
      await create({ name, email, password, roleId })

      return res.status(201).json({ message: 'User created successfully'})
    } catch (error) {
      next(error)
    }
}