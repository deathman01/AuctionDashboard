const express = require('express');
const router = express.Router();

var middleware = require('../../middleware');
var { Teams, Users, Players } = require('../../models');

router.post('/add', middleware.checkToken, async(req, res) => {
  const captainId = req.decoded.userId;
  const initialBalance = 10000;
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

router.get('/', middleware.checkToken, (req,res) => {
    Teams.findAll({
      attributes: ['id','name', 'desc', 'logoUrl'],
      include: [{
        attributes: ['name', 'id'],
        model: Users,
        as: 'captain',
        required: false
      }]
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

router.put('/details', middleware.checkToken, (req,res) => {
  console.log('req in team details', req.body);
    const teamId = req.body.teamId;
    Teams.findOne({
      where: {id: teamId},
      attributes: ['id','name', 'desc', 'balance', 'logoUrl'],
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
        }
      ]
    })
    .then(team => {
      const response = {
        success: true,
        ...team.dataValues,
        playersCount: team.Players.length,
      }
      return res.json(response);
    })
    .catch(e => {
      console.log('get team details err--------', e);
      return res.status(400).send('try again');
    })
});

module.exports = router;
