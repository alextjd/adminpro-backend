import {
  createUser,
  encryptPassword,
  getAllUsers,
  getUser,
} from '../services/user.service';

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
    const user = req.body;
    const foundUser = await getUser({ email: user.email });
    if (foundUser) {
      return res.sendStatus(400);
    }
    user.password = encryptPassword(user.password);
    const newUser = await createUser(user);
    return res.json({
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
