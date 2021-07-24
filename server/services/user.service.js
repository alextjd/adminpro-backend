import mongoose from 'mongoose';
import User from '../models/user.model';
import isNil from '../utils/types.utils';

export const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserById = async (id) => {
  try {
    return await User.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const getUser = async (query) => {
  try {
    return await User.findOne(query);
  } catch (error) {
    throw new Error(error);
  }
};

export const createUser = async (user) => {
  try {
    return await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (id, user) => {
  try {
    return await User.findByIdAndUpdate(id, user, { new: true });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const userAlreadyExists = async (query) => {
  try {
    const user = await getUser(query);
    return !isNil(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const searchUser = async (name) => {
  const regExp = new RegExp(name, 'i');
  return getUser({ name: regExp });
};

// TODO: move this to shared folder
export const isValidIdentifier = (id) => mongoose.Types.ObjectId.isValid(id);
