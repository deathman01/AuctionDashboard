//abhishek360
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {

  const Users = sequelize.define('Users',{
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM('admin', 'member', 'captain'),
      defaultValue: 'member',
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastLogin: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    verification: {
      type: DataTypes.ENUM('verified', 'pending'),
      defaultValue: 'pending',
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active',
    }
  });

  Users.associate = function(models) {
    Users.hasOne(models.Teams, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  }

  Users.authenticate = async function( username, password ){
    const user = await Users.findOne({ where: { email: username }});

    if(bcrypt.compareSync( password, user.password )) {
      user.update(
        {
          lastLogin: new Date()
        }
      );
      return user.authorize();
    }

    throw new Error('invalid password');
  }

  Users.prototype.authorize = async function() {
    const user = this;

    const authToken = jwt.sign(
      {
        userId: user.id,
        username: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '24h' // expires in 24 hours
      }
    );

    return {
      user,
      authToken
    };
  }

  Users.logout = async function(token) {
    return true;
  }

  return Users;
};
