import { sectionContentService, sectionPointOfRulesService, sectionsService } from '../services/rules.js';

export const sectionsTitlesController = (req, res) => {
  try {
    const arrSections = sectionsService(req, res);

    const sectionsTitles = arrSections.map(section => ({
      title: section.title,
      slag: section.slag,
    }));

    res.status(200).json(sectionsTitles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sectionContentController = (req, res) => {
  try {
    const section = sectionContentService(req, res);

    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const pointOfRulesController = (req, res) => {
  try {
    const point = sectionPointOfRulesService(req, res);
    // console.log(point);
    res.status(200).json(point);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
