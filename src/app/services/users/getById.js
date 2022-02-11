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
      if (!user) {
        return null
      }
      delete user.dataValues.password
      return user.dataValues
    } catch (err) {
        return (err)
    }
}