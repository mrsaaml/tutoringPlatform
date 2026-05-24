import { Router } from 'express';
import { requireAuth } from '../controllers/middlewares/requireAuth.js'
import { checkRole } from '../controllers/middlewares/checkRole.js'

import {
  getLmsMaterials,
  createLmsMaterial,
  deleteLmsMaterial,
} from '../controllers/lmsController.js';

const router = Router();

router.get('/',                               getLmsMaterials);
router.post('/',      requireAuth, checkRole(['admin']),  createLmsMaterial);
router.delete('/:id', requireAuth, checkRole(['admin']),  deleteLmsMaterial);

export default router;
