import {
  createUser,
  deleteUser,
  encryptPassword,
  getAllUsers,
  getUserById,
  isValidIdentifier,
  updateUser,
  userAlreadyExists,
} from '../services/user.service';
import errorMessages from '../utils/error.constants';
import infoMessages from '../utils/info.constants';

export const getAllUsersCtrl = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.json({ users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: errorMessages.internalServerError });
  }
};

export const createUserCtrl = async (req, res) => {
  try {
    const user = req.body;
    const isEmailTaken = await userAlreadyExists({ email: user.email });
    if (isEmailTaken) {
      return res.status(400).json({ error: errorMessages.emailAlreadyExists });
    }
    user.password = encryptPassword(user.password);
    const newUser = await createUser(user);
    return res.json({
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: errorMessages.internalServerError });
  }
};

export const updateUserCtrl = async (req, res) => {
  // TODO: Validar si el user que updatea es el propio user o un admin
  const { id } = req.params;
  const { body } = req;
  try {
    if (!isValidIdentifier(id)) {
      return res.status(400).json({ error: errorMessages.badRequest });
    }
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ error: errorMessages.notFound });
    }
    if (user.email === body.email) {
      delete body.email;
    }
    if (body.email) {
      const isEmailTaken = await userAlreadyExists({ email: user.email });
      if (isEmailTaken) {
        return res
          .status(400)
          .json({ error: errorMessages.emailAlreadyExists });
      }
    }
    delete body.google;
    delete body.password;
    const updatedUser = await updateUser(id, body);
    return res.status(201).json({ user: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: errorMessages.internalServerError });
  }
};

export const deleteUserCtrl = async (req, res) => {
  // TODO: Validar si el user que updatea es el propio user o un admin
  const { id } = req.params;
  try {
    if (!isValidIdentifier(id)) {
      return res.status(400).json({ error: errorMessages.badRequest });
    }
    const userExists = await userAlreadyExists({ _id: id });
    if (!userExists) {
      return res.status(404).json({ error: errorMessages.notFound });
    }
    await deleteUser(id);
    return res.status(200).json({ message: infoMessages.deleted, userId: id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: errorMessages.internalServerError });
  }
};
