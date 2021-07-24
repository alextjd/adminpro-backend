import { Router } from 'express';
import searchAnythingCtrl from '../controllers/search.controller';

import validateJWT from '../middlewares/jwt.middleware';

const router = Router();

// Search anything

router.get('/:searchItem', [validateJWT], searchAnythingCtrl);

export default router;
