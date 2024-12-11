import {
  sectionsOfTests,
  typesOfTests
} from '../constants/tests.js';

export const typesOfTestsService = (req, res) => {
  return typesOfTests;
}

export const sectionsTitlesTestsService = (req, res) => {
  return sectionsOfTests;
};

export const sectionTestsService = (req, res) => {
  const { sectionSlag } = req.params;

  const sectionObj = sectionsOfTests.find(sec => sec.slag === sectionSlag);

  return sectionObj;
};

export const commonMistakesService = (req, res) => {
  // const { sectionSlag } = req.params;

  // const sectionObj = sectionsOfTests.find(sec => sec.slag === sectionSlag);
  // return sectionObj;
};

export const errorCorrectionService = (req, res) => {
  // const { sectionSlag } = req.params;

  // const sectionObj = sectionsOfTests.find(sec => sec.slag === sectionSlag);
  // return sectionObj;
};

export const examService = (req, res) => {
  // const { sectionSlag } = req.params;

  // const sectionObj = sectionsOfTests.find(sec => sec.slag === sectionSlag);
  // return sectionObj;
};
