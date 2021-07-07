import { userAlreadyExists } from '../services/user.service';

const emailAlreadyTaken = async (email) => {
  const isEmailTaken = await userAlreadyExists({ email });
  return !isEmailTaken ? true : Promise.reject();
};

export default emailAlreadyTaken;
