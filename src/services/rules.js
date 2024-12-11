import { sections } from '../constants/rules.js';

export const sectionsService = (req, res) => {
  return sections;
};

export const sectionContentService = (req, res) => {
  const { sectionSlag } = req.params;

  const section = sections.find(sec => sec.slag === sectionSlag);
  return section;
};

export const sectionPointOfRulesService = (req, res) => {
  const { sectionSlag, number } = req.params;

  const section = sections.find(sec => sec.slag === sectionSlag);
  if (!section) {
    return null;
  }

  const data = section.content
    ? section.content.find(item => item.number === number)
    : section.signs
    ? section.signs.find(item => item.number === number)
    : null;

  return data;
};

