const Users = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    { timestamps: false },
  );

  users.associate = (models) => {
    users.belongsTo(
      models.Roles,
      { as: 'role', foreignKey: 'roleId' },
    );
  }
  
  return users;
};
  
module.exports = Users;