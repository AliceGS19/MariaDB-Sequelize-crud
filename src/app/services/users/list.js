const { Users } = require('../../models');

module.exports = async () => {
    try {
      let users = await Users.findAll()
      if (!users) return null
      users.map((user) => {
          delete user.dataValues.password;
          return user.dataValues
      })
      return users
    } catch (err) {
        return (err)
    }
}