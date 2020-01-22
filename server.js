const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var models = require("./src/models");
var env = require('dotenv');
env.config();
const path = require('path');
var routes = require("./src/routes/api");
const app = express();

app.use(bodyParser.json());

//DB Config
const db = require('./configs/keys').mongoURI;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Connect to Mongo
// mongoose.connect(db, {useNewUrlParser: true})
//   .then(() => console.log("mongoose connected"))
//   .catch(err => console.log(err));

//Connect to postgres with sequelize
models.sequelize.sync().then(function(){
  console.log('Nice! Postgres Databse connected.')
}).catch(function(err) {
  console.log(err);
})

//Use Routes
app.use('/api', routes);

app.use(express.static('client/build'));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
