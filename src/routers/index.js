import { Router } from 'express';

import usersRouter from './users.js';
import rulesRouter from './rules.js';
import testsRouter from './tests.js';

const router = Router();

router.use('/users', usersRouter);
router.use('/api/rules', rulesRouter);
router.use('/api/tests', testsRouter);

export default router;
