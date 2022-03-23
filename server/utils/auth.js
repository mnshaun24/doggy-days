const jwt = require("jsonwebtoken");
// require('dotenv').config();


// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // if (!token) {
    //   return res.status(400).json({ message: 'You have no token!' });
    // }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      // console.log('Invalid token');
      // return res.status(400).json({ message: 'invalid token!' });
    }
    return req;
  },
  signToken: function ({ name, phoneNumber, _id }) {
    const payload = { name, phoneNumber, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
