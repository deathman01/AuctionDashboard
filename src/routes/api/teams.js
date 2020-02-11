const express = require('express');
const router = express.Router();

var middleware = require('../../middleware');
var { Teams, Users, Players } = require('../../models');

router.post('/add', middleware.checkToken, async(req, res) => {
  const captainId = req.decoded.userId;
  var initialBalance = 10000;
  if(req.body.balance)
    initialBalance = req.body.balance;

  try {
    let user = await Teams.create(
      Object.assign({
        name: req.body.name,
        desc: req.body.desc,
        logoUrl: req.body.logoUrl,
        captainId: captainId,
        balance: initialBalance,
        createdAt: new Date()
      })
    );
    //console.log('body--------',req.body);

    return res.json(
      {
        success: true,
        message: 'Team registered successfully.'
      }
    );
  }
  catch(err){
    console.log('team creation err--------',err);
    return res.status(400).send('invalid params');
  }
});

router.get('/', (req,res) => {
    Teams.findAll({
      attributes: ['id','name', 'desc', 'logoUrl', 'balance'],
      include: [
        {
          attributes: ['name', 'id'],
          model: Users,
          as: 'captain',
          required: false
        },
        {
          attributes: ['name', 'id'],
          model: Players,
          as: 'players',
          required: false
        }
      ]
    })
    .then(teams => {
      return res.json({
        success: true,
        count: teams.length,
        teams,
      })
    })
    .catch(e => {
      console.log('get team list err--------', e);
      return res.status(400).send('try again');
    })
});

router.get('/:teamId', (req,res) => {
    Teams.findOne({
      attributes: ['id','name', 'desc', 'logoUrl', 'balance'],
      include: [
        {
          attributes: ['name', 'id'],
          model: Users,
          as: 'captain',
          required: false
        },
        {
          attributes: ['name', 'id'],
          model: Players,
          as: 'players',
          required: false
        }
      ],
      where: {id: req.params.teamId}
    })
    .then(team => {
      return res.json({
        success: true,
        ...team.dataValues,
        noOfPlayers: team.players.length,
      })
    })
    .catch(e => {
      console.log('get team list err--------', e);
      return res.status(400).send('try again');
    })
});

module.exports = router;
