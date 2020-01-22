var express = require('express');
var router = express.Router();
var playerController = require('./players');
var teamController = require('./teams');
var userController = require('./users');

router.use('/users', userController);
router.use('/players', playerController);
router.use('/teams', teamController);

module.exports = router;
