//abhishek360

var middleware = require('../../middleware');
var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
var { Users } = require('../../models');

router.post('/signup', async(req, res) => {

  const hash = bcrypt.hashSync(req.body.password, 10);

  try {
    let user = await Users.create(
      Object.assign({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        createdAt: new Date()
      },
      { password: hash })
    );
    //console.log('body--------',req.body);

    return res.json(
      {
        success: true,
        message: 'User registered successfully.'
      }
    );
  }
  catch(err){
    console.log('signup err--------',err);
    return res.status(400).send('invalid params');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if(!username||!password){
    return res.status(400).send(
      'missing login details params'
    );
  }

  try {
    let user = await Users.authenticate(username, password);

    return res.json(
      {
        success: true,
        id: user.user.id,
        role: user.user.role,
        name: user.user.name,
        phone: user.user.phone,
        email: user.user.email,
        token: user.authToken
      }
    );
  }
  catch(err) {
    console.log('err in login', err);
    return res.status(400).send(
      'invalid username or password'
    );
  }
})

router.put('/logout', async(req, res) => {
  const authToken = req.header('xyz-access-token');

  if(authToken) {
    const result = await Users.logout(authToken);
    return res.send(
      {
        success: result,
        message: 'user logged out successfully!'
      }
    );
  }

  return res.status(400).send(
    {
      success: false,
      message: 'not authenticated'
    }
  );
})


module.exports = router;
