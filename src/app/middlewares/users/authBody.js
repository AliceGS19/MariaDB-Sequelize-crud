const { StatusCodes } = require('http-status-codes');
const userSchema = require('../../schemas/user');
const rolesService = require('../../services/roles');

module.exports = async (req,res,next) => {
    try {
      const { name, email, password, roleId } = req.body
      console.log(req.body)
      const { error } = userSchema.validate({ name, email, password, roleId });
      if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
      if (roleId) {
          const role = await rolesService.getById(roleId);
          if (!role) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Role not found' })
      }
      next()
    } catch (err) {
        next(err)
    }
}