import path from 'path';
import { v4 as uuid } from 'uuid';

import { defaultUploadPath } from '../utils/constants/file.constants';
import getExtension from '../utils/string.utils';

export const uploadFile = (file, filePath) =>
  new Promise((resolve, reject) => {
    file.mv(filePath, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });

export const getUploadPath = (image, collection) => {
  const id = uuid();
  const extension = getExtension(image.name);
  return path.join(`${defaultUploadPath}${collection}/${id}.${extension}`);
};
