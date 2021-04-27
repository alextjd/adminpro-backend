import { Router } from 'express';
import {
  createDoctorCtrl,
  deleteDoctorCtrl,
  getAllDoctorsCtrl,
  updateDoctorCtrl,
} from '../controllers/doctor.controller';
import validateJWT from '../middlewares/jwt.middleware';

const router = Router();

// Get all doctors
router.get('/', validateJWT, getAllDoctorsCtrl);

// Create doctor
router.post('/', [validateJWT], createDoctorCtrl);

// Update doctor by id
router.put('/:id', [validateJWT], updateDoctorCtrl);

// Delete doctor by id
router.delete('/:id', validateJWT, deleteDoctorCtrl);

export default router;
