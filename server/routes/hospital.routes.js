import { Router } from 'express';
import {
  createHospitalCtrl,
  deleteHospitalCtrl,
  getAllHospitalsCtrl,
  updateHospitalCtrl,
} from '../controllers/hospital.controller';
import validateJWT from '../middlewares/jwt.middleware';

const router = Router();

// Get all hospitals
router.get('/', validateJWT, getAllHospitalsCtrl);

// Create hospital
router.post('/', [validateJWT], createHospitalCtrl);

// Update hospital by id
router.put('/:id', [validateJWT], updateHospitalCtrl);

// Delete hospital by id
router.delete('/:id', validateJWT, deleteHospitalCtrl);

export default router;
