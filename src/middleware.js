//abhishek360

let jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
  let token = req.headers['xyz-access-token'] || req.headers['authorization'];
  if (token!=null && token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send(
         'Token is not valid'
        );
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send(
      'Auth token is not supplied'
    );
  }
};

module.exports = {
  checkToken: checkToken
}
