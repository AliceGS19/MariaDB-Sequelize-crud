const { Users, Roles } = require('../../models');

module.exports = async (id) => {
    try {
      const user = await Users.findByPk(id, {
          include: {
            model: Roles,
            as: 'role',
            attributes: ['name']
          }
      })
      if (user) {
        user = user.dataValues
      }
      delete user.password
      user.role = user.role.name
      return user
    } catch (err) {
        return (err)
    }
}