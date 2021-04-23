import {
  createUser,
  encryptPassword,
  getAllUsers,
  getUser,
  getUserById,
  isValidIdentifier,
  updateUser,
} from '../services/user.service';
import errorMessages from '../utils/error.constants';

export const getAllUsersCtrl = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.json({ users });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: errorMessages.internalServerError });
  }
};

export const createUserCtrl = async (req, res) => {
  try {
    const user = req.body;
    const foundUser = await getUser({ email: user.email });
    if (foundUser) {
      return res.status(400).send({ error: errorMessages.userAlreadyExists });
    }
    user.password = encryptPassword(user.password);
    const newUser = await createUser(user);
    return res.json({
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: errorMessages.internalServerError });
  }
};

export const updateUserCtrl = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    if (!isValidIdentifier(id)) {
      return res.status(400).send({ error: errorMessages.badRequest });
    }
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).send({ error: errorMessages.notFound });
    }
    if (user.email === body.email) {
      delete body.email;
    }
    if (body.email) {
      const foundUser = await getUser({ email: user.email });
      if (foundUser) {
        return res
          .status(400)
          .send({ error: errorMessages.emailAlreadyExists });
      }
    }
    delete body.google;
    delete body.password;
    const updatedUser = await updateUser(id, body);
    return res.status(201).send({ user: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: errorMessages.internalServerError });
  }
};
