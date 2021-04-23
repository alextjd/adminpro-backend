import { genSaltSync, hashSync } from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../models/user.model';

export const getAllUsers = async () => {
  try {
    return await User.find();
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

// TODO: move this to shared folder
export const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const getUser = async (query) => {
  try {
    return await User.findOne(query);
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

export const encryptPassword = (password) => {
  const salt = genSaltSync();
  return hashSync(password, salt);
};
