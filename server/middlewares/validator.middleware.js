import { response } from 'express';
import { validationResult } from 'express-validator';

export const validateFields = (req, res = response, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.mapped() });
  }
  next();
};

export default { validateFields };
