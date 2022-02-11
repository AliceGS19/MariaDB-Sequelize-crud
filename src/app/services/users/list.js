const { Users } = require('../../models');

module.exports = async () => {
    try {
      let users = (await Users.findAll())
      if (!users) return null
      users = users.dataValues
      users.map((user) => {
          delete user.password;
          return user
      })
      return users
    } catch (err) {
        return (err)
    }
}