import { Router } from 'express';
import { requireAuth } from '../middlewares/requireAuth.js';
import { checkRole } from '../middlewares/checkRole.js';
import {
  getQuestions,
  createQuestion,
  deleteQuestion,
} from '../controllers/questionsController.js';

const router = Router();

router.get('/',                                     getQuestions);
router.post('/',          requireAuth, checkRole(['admin']),    createQuestion);
router.delete('/:id',     requireAuth, checkRole(['admin']),    deleteQuestion);

export default router;
