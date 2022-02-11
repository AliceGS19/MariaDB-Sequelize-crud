const { StatusCodes } = require('http-status-codes');
const usersService = require('../../services/users');

module.exports = async (req,res,next) => {
    try {
      const { email } = req.body
      const userExist = await usersService.getByEmail(email)
      if (userExist) return res.status(StatusCodes.CONFLICT).json({ message: 'Email already registered' })
      next()
    } catch (err) {
        next(err)
    }
}