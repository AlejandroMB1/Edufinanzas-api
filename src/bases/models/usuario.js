'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    username: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
  }, {});
  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Rol);
  };
  return Usuario;
};