const { Users } = require('../../models');

module.exports = async (id) => {
    try {
      const user = await Users.destroy({ where: { id } });
      return user
    } catch (err) {
        return (err)
    }
}