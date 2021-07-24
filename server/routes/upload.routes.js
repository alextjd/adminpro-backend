import { Router } from 'express';
import fileUpload from 'express-fileupload';
import uploadFileCtrl from '../controllers/upload.controller';

import validateJWT from '../middlewares/jwt.middleware';
import isValidFile from '../middlewares/upload-file.middleware';

const router = Router();

// Use the express-fileupload package
router.use(fileUpload());

// Upload file
router.post('/:collection/:id', [validateJWT, isValidFile], uploadFileCtrl);

export default router;
