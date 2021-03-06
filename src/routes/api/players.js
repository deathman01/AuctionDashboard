const express = require('express');
const router = express.Router();

var middleware = require('../../middleware');
var { Teams, Players, sequelize } = require('../../models');

router.post('/add', middleware.checkToken, async(req, res) => {
  try {
    let user = await Players.create(
      Object.assign({
        name: req.body.name,
        desc: req.body.desc,
        dept: req.body.dept,
        role: req.body.role,
        hostel: req.body.hostel,
        bowlingHand: req.body.bowlingHand,
        battingHand: req.body.battingHand,
        phone: req.body.phone,
        whatsApp: req.body.whatsApp,
        availability: req.body.availability,
        price: req.body.price,
        createdAt: new Date()
      })
    );
    //console.log('body--------',req.body);

    return res.json(
      {
        success: true,
        message: 'Player registered successfully.'
      }
    );
  }
  catch(err){
    console.log('player creation err--------',err);
    return res.status(400).send('invalid params');
  }
});

router.get('/', (req,res) => {
  Players.findAll({
    attributes: ['id','name', 'desc', 'dept', 'hostel', 'role', 'battingHand', 'bowlingHand', 'phone', 'whatsApp', 'availability', 'price', 'picUrl'],
    include: [{
      attributes: ['name', 'id'],
      model: Teams,
    }]
  })
  .then(players => {
    return res.json({
      success: true,
      count: players.length,
      players,
    })
  })
  .catch(e => {
    console.log('get players list err--------', e);
    return res.status(400).send('try again');
  })
});

router.get('/:playerId', (req,res) => {
    Players.findOne({
      attributes: ['id','name', 'desc', 'dept', 'hostel', 'role', 'battingHand', 'bowlingHand', 'phone', 'whatsApp', 'availability', 'price', 'picUrl'],
      include: [
        {
          attributes: ['name', 'id'],
          model: Teams,
        }
      ],
      where: {id: req.params.playerId}
    })
    .then(player => {
      return res.json({
        success: true,
        ...player.dataValues,
      })
    })
    .catch(e => {
      console.log('get player by id err--------', e);
      return res.status(400).send('try again');
    })
});

router.put('/assignTeam', async (req,res) => {
  const { teamId, playerId, price} = req.body;
  const team = await Teams.findOne({where: {id: req.body.teamId}})
  if(team){
    if(team.balance>price){
      try {
        const result = await sequelize.transaction(async (t) => {

          const player = await Players.update(
            {
              TeamId: teamId,
              price
            },
            {
              where: {id: playerId}
            },
            {transaction: t}
          )

          const balance = team.balance-price
          await team.update(
            {
              balance
            },
            {transaction: t}
          )

          return player;

        });
      }catch (e) {
        console.log('team assignment error', e);
        return res.status(400).send('invalid params');
      }

      return res.json({
        success: true,
        message: 'team assigned successfully'
      })
    }
    else{
      return res.json({
        success: false,
        message: 'invalid amount'
      })
    }
  }

  return res.status(400).send('invalid params');
})

module.exports = router;
