import { Router } from 'express';
import {
  searchAnythingCtrl,
  searchByCollectionCtrl,
} from '../controllers/search.controller';

import validateJWT from '../middlewares/jwt.middleware';

const router = Router();

// Search anything
router.get('/:searchItem', [validateJWT], searchAnythingCtrl);
// Search in a specific collection
router.get('/:collection/:searchItem', [validateJWT], searchByCollectionCtrl);

export default router;
