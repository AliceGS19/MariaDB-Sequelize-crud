const { Users } = require('../../models');

module.exports = async (user, id) => {
    try {
      const newUser = await Users.update(user, { where: { id } })
      return newUser
    } catch (err) {
        return (err)
    }
}