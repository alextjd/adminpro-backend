import { sign } from 'jsonwebtoken';

const createJWT = (data) =>
  new Promise((resolve, reject) => {
    const payload = { ...data };
    sign(
      payload,
      process.env.TOKEN_KEY,
      { expiresIn: '72h' },
      (error, token) => {
        if (error) {
          reject(error);
        }
        resolve(token);
      }
    );
  });

export default createJWT;
