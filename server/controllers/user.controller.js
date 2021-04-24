import createJWT from '../helpers/jwt';
import { encrypt } from '../services/auth.service';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  isValidIdentifier,
  updateUser,
  userAlreadyExists,
} from '../services/user.service';
import errorMessages from '../utils/constants/error.constants';
import infoMessages from '../utils/constants/info.constants';
import { BadRequestError, NotFoundError } from '../utils/errors/error';

export const getAllUsersCtrl = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    return res.json({ users });
  } catch (error) {
    return next(error);
  }
};

export const createUserCtrl = async (req, res, next) => {
  try {
    const user = req.body;
    const isEmailTaken = await userAlreadyExists({ email: user.email });
    if (isEmailTaken) {
      throw new BadRequestError(errorMessages.emailAlreadyExists);
    }
    user.password = encrypt(user.password);
    const newUser = await createUser(user);
    const token = await createJWT({ id: newUser._id, email: newUser.email });
    return res.json({
      user: newUser,
      token,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateUserCtrl = async (req, res, next) => {
  // TODO: Validar si el user que updatea es el propio user o un admin
  const { id } = req.params;
  const { body } = req;
  try {
    if (!isValidIdentifier(id)) {
      throw new BadRequestError();
    }
    const user = await getUserById(id);
    if (!user) {
      throw new NotFoundError();
    }
    if (user.email === body.email) {
      delete body.email;
    }
    if (body.email) {
      const isEmailTaken = await userAlreadyExists({ email: user.email });
      if (isEmailTaken) {
        throw new BadRequestError(errorMessages.emailAlreadyExists);
      }
    }
    delete body.google;
    delete body.password;
    const updatedUser = await updateUser(id, body);
    return res.status(201).json({ user: updatedUser });
  } catch (error) {
    return next(error);
  }
};

export const deleteUserCtrl = async (req, res, next) => {
  // TODO: Validar si el user que updatea es el propio user o un admin
  const { id } = req.params;
  try {
    if (!isValidIdentifier(id)) {
      throw new BadRequestError();
    }
    const userExists = await userAlreadyExists({ _id: id });
    if (!userExists) {
      throw new NotFoundError();
    }
    await deleteUser(id);
    return res.status(200).json({ message: infoMessages.deleted, userId: id });
  } catch (error) {
    return next(error);
  }
};
