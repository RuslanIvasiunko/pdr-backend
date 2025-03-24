import { Router } from 'express';


import {
  pointOfRulesController,
  sectionContentController,
  sectionsTitlesController,
} from '../controllers/rules.js';

const rulesRouter = Router();


rulesRouter.get('/sections-titles', sectionsTitlesController);
rulesRouter.get('/:sectionSlag', sectionContentController);
rulesRouter.get('/:sectionSlag/:number', pointOfRulesController);
export default rulesRouter;
