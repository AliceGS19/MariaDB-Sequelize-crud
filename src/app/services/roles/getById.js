const { Roles } = require('../../models');

module.exports = async (id) => {
    try {
      const role = await Roles.findByPk(id)
      return role
    } catch (err) {
        return (err)
    }
}