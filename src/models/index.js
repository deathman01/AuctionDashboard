//abhishek360

var fs = require("fs");
var path = require("path");
var dotenv = require("dotenv");
dotenv.config();
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', '..', 'configs', 'config.json' ))[env];
var sequelize = null;

// var sequelize = new Sequelize( "postgres://postgres:postgres@localhost/photo_forum_dev",
//   {
//     dialect: 'postgres',
//   }
// );
console.log('config in index models', config);
if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
  })
}
else{
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      dialect: 'postgres',
    }
  );
}

var db = {};

fs.readdirSync(__dirname).filter(function(file){
    return (file.indexOf("."!==0)&&file !== "index.js");
  })
  .forEach(function(file){
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
