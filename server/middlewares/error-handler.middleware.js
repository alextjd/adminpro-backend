import errorMessages from '../utils/constants/error.constants';
import { GeneralError } from '../utils/errors/error';

const handleError = (error, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(error);
  const timestamp = new Date().toUTCString();
  if (error instanceof GeneralError) {
    return res.status(error.getCode()).json({
      timestamp,
      message: error.message,
    });
  }
  return res.status(500).json({
    timestamp,
    message: errorMessages.internalServerError,
  });
};

export default handleError;
