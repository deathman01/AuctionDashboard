const express = require('express');
const router = express.Router();

const Player = require('../../models/Players');
const Team = require('../../models/Teams');

router.get('/', async (req,res) => {
  // const newTeam = new Team({
  //   Name: 'xyz',
  //   Amount: 10000,
  //   noOfPlayers: 0,
  //   players: []
  // })
  //
  // await newTeam.save(function(err){
  //   if(err){
  //     console.log('failed to save team');
  //   }
  // })

    Team.find()
        .then(teams => {
          console.log('teams list in fetch', teams);
          return res.json(teams)
        })
});

router.get('/:id', (req,res) => {
    Player.find({Team: req.params.id})
        .then(players => res.json(players))
})

router.put('/:teamid', (req,res) => {
    Team.findById(req.params.teamid)
    .then((team) => {
        team.Amount = team.Amount - req.body.price
        team.noOfPlayers += 1
        team.playerNo.push(req.body.playerNo)
        team.save();
        res.send(team)
    });
});

module.exports = router;
