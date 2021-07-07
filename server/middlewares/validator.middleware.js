import { response } from 'express';
import { validationResult } from 'express-validator';

import { BadRequestError } from '../utils/errors/error';

export const validateFields = (req, res = response, next) => {
  const validationErrors = validationResult(req);
  console.log(validationErrors);
  if (!validationErrors.isEmpty()) {
    throw new BadRequestError(validationErrors.mapped());
  }
  next();
};

export default { validateFields };
