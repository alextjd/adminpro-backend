import express from 'express';
import { check } from 'express-validator';

import {
  getAllUsersCtrl,
  createUserCtrl,
} from '../controllers/user.controller';

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
  ],
  createUserCtrl
);

export default router;
