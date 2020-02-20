//abhishek360

module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('Teams',{
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    captainId: {
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    logoUrl: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });

  Teams.associate = function(models) {
    Teams.belongsTo(models.Users, { as: 'captain', foreignKey: 'captainId', targetKey: 'id' });
    Teams.hasMany(models.Players, {
      as: 'players',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });
  }

  return Teams;
};
