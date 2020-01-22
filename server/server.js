const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const players = require('../routes/api/players');
const teams = require('../routes/api/teams');
const app = express();
const Team = require('../models/Teams');

app.use(bodyParser.json());

//DB Config
const db = require('../Config/keys').mongoURI;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log("mongoose connected"))
  .catch(err => console.log(err));

var db_connect = mongoose.connection;

db_connect.on('open', function () {
  db_connect.db.listCollections().toArray(function (err, collectionNames) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(collectionNames);
  });
});  

//Bind connection to error event (to get notification of connection errors)
db_connect.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Use Routes
app.use('/api/players', players);
app.use('/api/teams', teams);

app.use(express.static('client/build'));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
