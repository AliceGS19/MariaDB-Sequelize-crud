const { Users } = require('../../models')

module.exports = async (email) => {
    try {
        const user = (await Users.findOne({ where: { email } })).dataValues
        return user;
    } catch (e) {
        return e;
    }
}