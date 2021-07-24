import Hospital from '../models/hospital.model';

export const getAllHospitals = async () => {
  try {
    return await Hospital.find().populate('creator', 'name img');
  } catch (error) {
    throw new Error(error);
  }
};

export const getHospital = async (query) => {
  try {
    return await Hospital.findOne(query);
  } catch (error) {
    throw new Error(error);
  }
};

export const createHospital = async (hospital) => {
  try {
    return await Hospital.create(hospital);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateHospital = async (id, hospital) => {
  try {
    return await Hospital.findByIdAndUpdate(id, hospital, { new: true });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteHospital = async (id) => {
  try {
    return await Hospital.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const searchHospital = async (name) => {
  const regExp = new RegExp(name, 'i');
  return getHospital({ name: regExp });
};
