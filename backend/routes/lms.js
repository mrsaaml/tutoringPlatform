import { Router } from 'express';
import { requireAuth } from '../middlewares/requireAuth.js';
import { checkRole } from '../middlewares/checkRole.js';
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
