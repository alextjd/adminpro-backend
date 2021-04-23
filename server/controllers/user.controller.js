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
    const user = await getUser({ email: req.email });
    if (user !== undefined) {
      return res.sendStatus(401);
    }
    const newUser = await createUser(req.body);
    res.json({
      newUser,
    });
  } catch (error) {
    res.sendStatus(500);
  }
};
