import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

export const encrypt = (data) => {
  const salt = genSaltSync();
  return hashSync(data, salt);
};

export const compareEncrypted = (data, hash) => compareSync(data, hash);
