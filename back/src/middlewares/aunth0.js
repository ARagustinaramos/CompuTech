const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const dotenv = require('dotenv');
const { User } = require('../models');

dotenv.config();

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const getUserInfoFromJwt = async (req, res, next) => {
  if (req.user) {
    const { sub, email, name, picture } = req.user;
    const roles = req.user[`${process.env.AUTH0_NAMESPACE}/roles`] || [];

    req.userInfo = {
      auth0Id: sub,
      email,
      name,
      picture,
      roles
    };

    // Sincronizar usuario con la base de datos
    try {
      let user = await User.findOne({ where: { mail: email } });

      if (!user) {
        user = await User.create({
          name,
          mail: email,
          phone: '',
          image: picture,
          address: '',
          active: true,
          rol: roles.includes('admin'),
          shoppingCart: [],
          recurringPayment: {}
        });
      } else {
        // Actualizar la información del usuario si es necesario
        user.name = name;
        user.image = picture;
        user.rol = roles.includes('admin');
        await user.save();
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error syncing user', error });
    }
  }
  next();
};

const checkAdminRole = (req, res, next) => {
  if (!req.userInfo || !req.userInfo.roles.includes('admin')) {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};

module.exports = {
  checkJwt,
  getUserInfoFromJwt,
  checkAdminRole
};
