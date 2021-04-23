import express from 'express';
import { check } from 'express-validator';

import {
  createUserCtrl,
  getAllUsersCtrl,
} from '../controllers/user.controller';
import { validateFields } from '../middlewares/validator.middleware';

const router = express.Router();

// Get all users
router.get('/', getAllUsersCtrl);

// Create user
router.post(
  '/',
  [
    check('name').notEmpty(),
    check('password').notEmpty(),
    check('email').isEmail(),
    validateFields,
  ],
  createUserCtrl
);

export default router;
