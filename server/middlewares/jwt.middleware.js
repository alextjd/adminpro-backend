import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/errors/error';

const validateJWT = (req, res, next) => {
  const token = req.header('adminpro-token');
  if (!token) {
    throw new UnauthorizedError();
  }
  try {
    verify(token, process.env.TOKEN_KEY);
    next();
  } catch (error) {
    next(error);
  }
};

export default validateJWT;
