import errorMessages from '../utils/constants/error.constants';
import { validFileExtensions } from '../utils/constants/file.constants';
import { BadRequestError } from '../utils/errors/error';
import getExtension from '../utils/string.utils';

const isValidFile = (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      throw new BadRequestError(errorMessages.invalidFile);
    }
    const { image } = req.files;
    if (!image) {
      throw new BadRequestError(errorMessages.invalidFile);
    }
    const extension = getExtension(image.name);
    if (!Object.values(validFileExtensions).includes(extension)) {
      throw new BadRequestError(errorMessages.invalidFile);
    }
  } catch (error) {
    throw new Error(error);
  }
  next();
};

export default isValidFile;
