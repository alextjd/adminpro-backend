import { createDoctor } from '../services/doctor.service';

export const getAllDoctorsCtrl = async (req, res, next) => {
  try {
    return res.json();
  } catch (error) {
    return next(error);
  }
};

export const createDoctorCtrl = async (req, res, next) => {
  try {
    const { uid } = req;
    const doctor = req.body;
    doctor.creator = uid;
    const newDoctor = await createDoctor(doctor);
    return res.json({ doctor: newDoctor });
  } catch (error) {
    return next(error);
  }
};

export const updateDoctorCtrl = async (req, res, next) => {
  try {
    return res.json();
  } catch (error) {
    return next(error);
  }
};

export const deleteDoctorCtrl = async (req, res, next) => {
  try {
    return res.json();
  } catch (error) {
    return next(error);
  }
};
