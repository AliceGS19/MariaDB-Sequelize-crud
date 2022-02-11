const { Users } = require('../../models');

module.exports = async (user) => {
    try {
      const newUser = await Users.create(user)
      return newUser
    } catch (err) {
        return (err)
    }
}