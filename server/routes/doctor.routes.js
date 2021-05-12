import { Router } from 'express';
import { check } from 'express-validator';
import {
  createDoctorCtrl,
  deleteDoctorCtrl,
  getAllDoctorsCtrl,
  updateDoctorCtrl,
} from '../controllers/doctor.controller';
import validateJWT from '../middlewares/jwt.middleware';
import { validateFields } from '../middlewares/validator.middleware';

const router = Router();

// Get all doctors
router.get('/', validateJWT, getAllDoctorsCtrl);

// Create doctor
router.post(
  '/',
  [validateJWT, check('hospital').notEmpty().isMongoId(), validateFields],
  createDoctorCtrl
);

// Update doctor by id
router.put('/:id', [validateJWT], updateDoctorCtrl);

// Delete doctor by id
router.delete('/:id', validateJWT, deleteDoctorCtrl);

export default router;
