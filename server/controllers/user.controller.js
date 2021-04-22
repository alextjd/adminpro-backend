import { createUser, getAllUsers } from '../services/user.service';

export const getAllUsersCtrl = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({ ok: true, users });
  } catch (error) {
    res.sendStatus(500);
  }
};

export const createUserCtrl = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
