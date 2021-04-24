import { compareEncrypted } from '../services/auth.service';
import { getUser } from '../services/user.service';
import errorMessages from '../utils/constants/error.constants';
import { BadRequestError } from '../utils/errors/error';

const loginCtrl = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await getUser({ email });
    if (!user) {
      throw new BadRequestError(errorMessages.login);
    }
    const isValidPassword = compareEncrypted(user.password, password);
    if (!isValidPassword) {
      throw new BadRequestError(errorMessages.login);
    }
  } catch (error) {
    next(error);
  }
};

export default loginCtrl;
