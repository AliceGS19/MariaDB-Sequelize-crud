const Roles = (sequelize, DataTypes) => {
  const roles = sequelize.define(
    'Roles',
    {
      name: DataTypes.STRING,
    },
    { timestamps: false },
  );

  roles.associate = (models) => {
    roles.hasMany(
      models.Users,
      { as: 'users', foreignKey: 'roleId' },
    );
  }
  
  return roles;
};
  
module.exports = Roles;