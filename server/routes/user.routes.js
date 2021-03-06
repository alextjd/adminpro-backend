import express from 'express';
import { check } from 'express-validator';

import {
  createUserCtrl,
  deleteUserCtrl,
  getAllUsersCtrl,
  updateUserCtrl,
} from '../controllers/user.controller';
import emailAlreadyTaken from '../middlewares/email-already-taken.middleware';
import validateJWT from '../middlewares/jwt.middleware';
import { validateFields } from '../middlewares/validator.middleware';
import errorMessages from '../utils/constants/error.constants';

const router = express.Router();

// Get all users
router.get('/', validateJWT, getAllUsersCtrl);

// Create user
router.post(
  '/',
  [
    validateJWT,
    check('name').notEmpty(),
    check('password').notEmpty(),
    check('email').isEmail(),
    check('email')
      .custom(emailAlreadyTaken)
      .withMessage(errorMessages.emailAlreadyExists),
    validateFields,
  ],
  createUserCtrl
);

// Update user by id
router.put(
  '/:id',
  [
    validateJWT,
    check('name').notEmpty(),
    check('role').notEmpty(),
    check('email').isEmail(),
    validateFields,
  ],
  updateUserCtrl
);

// Delete user by id
router.delete('/:id', validateJWT, deleteUserCtrl);

export default router;
