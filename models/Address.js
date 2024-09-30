const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Address = sequelize.define('Address', {
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = Address;
