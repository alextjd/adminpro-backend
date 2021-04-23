import { validationResult } from 'express-validator';
import { createUser, getAllUsers, getUser } from '../services/user.service';

export const getAllUsersCtrl = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const createUserCtrl = async (req, res) => {
  try {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.mapped() });
    }
    const user = await getUser({ email: req.email });
    if (user !== undefined) {
      return res.sendStatus(400);
    }
    const newUser = await createUser(req.body);
    return res.json({
      newUser,
    });
  } catch (error) {
    return res.sendStatus(500);
  }
};
