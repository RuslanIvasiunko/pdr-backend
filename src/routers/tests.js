import { Router } from 'express';
import {
  typesOfTestsController,
  sectionsTitlesTestsController,
  sectionDefaultTestsController,
  sectionRandomTestsController,
  errorCorrectionController,
  commonMistakesController,
  examController,
} from '../controllers/tests.js';

const testsRouter = Router();

testsRouter.get('/types-of-tests', typesOfTestsController);
testsRouter.get('/sections/sections-titles', sectionsTitlesTestsController);
testsRouter.get('/sections/:sectionSlag', sectionDefaultTestsController);
testsRouter.get('/sections/:sectionSlag/random', sectionRandomTestsController);
``;

testsRouter.get('/error-correction', errorCorrectionController);
testsRouter.get('/common-mistakes', commonMistakesController);
testsRouter.get('/exam', examController);

export default testsRouter;
