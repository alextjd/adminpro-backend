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

export const getUser = async (query) => {
  try {
    return await User.find(query);
  } catch (error) {
    throw new Error(error);
  }
};
