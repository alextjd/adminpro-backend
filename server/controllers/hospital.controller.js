import { createHospital } from '../services/hospital.service';

export const getAllHospitalsCtrl = async (req, res, next) => {
  try {
    return res.json();
  } catch (error) {
    return next(error);
  }
};

export const createHospitalCtrl = async (req, res, next) => {
  try {
    const { uid } = req;
    const hospital = req.body;
    hospital.creator = uid;
    const newHospital = await createHospital(hospital);
    return res.json({ hospital: newHospital });
  } catch (error) {
    return next(error);
  }
};

export const updateHospitalCtrl = async (req, res, next) => {
  try {
    return res.json();
  } catch (error) {
    return next(error);
  }
};

export const deleteHospitalCtrl = async (req, res, next) => {
  try {
    return res.json();
  } catch (error) {
    return next(error);
  }
};
