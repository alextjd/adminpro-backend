import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/errors/error';

const validateJWT = (req, res, next) => {
  const token = req.header('adminpro-token');
  if (!token) {
    throw new UnauthorizedError();
  }
  try {
    const { uid } = verify(token, process.env.TOKEN_KEY);
    req.uid = uid;
    next();
  } catch (error) {
    throw new UnauthorizedError();
  }
};

export default validateJWT;
