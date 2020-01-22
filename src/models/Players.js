//abhishek360

module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players',{
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picUrl: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    yr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    whatsApp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
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

  Players.associate = function(models) {
    Players.belongsTo(models.Teams);
  }

  return Players;
};
