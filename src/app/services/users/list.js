const { Users } = require('../../models');

module.exports = async () => {
    try {
      const users = (await Users.findAll()).dataValues
      users.map((user) => {
          delete user.password;
          return user
      })
      return users
    } catch (err) {
        return (err)
    }
}