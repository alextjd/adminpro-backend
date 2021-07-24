import Doctor from '../models/doctor.model';

export const getAllDoctors = async () => {
  try {
    return await Doctor.find().populate('creator', 'name img');
  } catch (error) {
    throw new Error(error);
  }
};

export const getDoctor = async (query) => {
  try {
    return await Doctor.findOne(query);
  } catch (error) {
    throw new Error(error);
  }
};

export const getDoctors = async (query) => {
  try {
    return await Doctor.find(query);
  } catch (error) {
    throw new Error(error);
  }
};

export const createDoctor = async (doctor) => {
  try {
    return await Doctor.create(doctor);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateDoctor = async (id, doctor) => {
  try {
    return await Doctor.findByIdAndUpdate(id, doctor, { new: true });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteDoctor = async (id) => {
  try {
    return await Doctor.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const searchDoctor = async (name) => {
  const regExp = new RegExp(name, 'i');
  return getDoctor({ name: regExp });
};
