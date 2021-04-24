import express from 'express';
import { check } from 'express-validator';
import loginCtrl from '../controllers/auth.controller';
import { validateFields } from '../middlewares/validator.middleware';

const router = express.Router();

// Login
router.post(
  '/',
  [check('email').isEmail(), check('password').notEmpty(), validateFields],
  loginCtrl
);

export default router;
