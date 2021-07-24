import { getUploadPath, uploadFile } from '../services/upload.service';
import infoMessages from '../utils/constants/info.constants';
import modelNames from '../utils/constants/models.constants';
import { BadRequestError } from '../utils/errors/error';
import isNil from '../utils/types.utils';

const uploadFileCtrl = async (req, res, next) => {
  const { collection, id } = req.params;
  const { image } = req.files;
  try {
    if (isNil(collection) || isNil(id)) {
      throw new BadRequestError();
    }
    if (!Object.values(modelNames).includes(collection)) {
      throw new BadRequestError();
    }
    const path = getUploadPath(image, collection);
    await uploadFile(image, path);
    return res.json({
      message: infoMessages.imageUploaded,
    });
  } catch (error) {
    return next(error);
  }
};

export default uploadFileCtrl;
