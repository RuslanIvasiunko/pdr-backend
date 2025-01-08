import {
  typesOfTestsService,
  sectionsTitlesTestsService,
  sectionTestsService,
  commonMistakesService,
  errorCorrectionService,
  examService,
} from "../services/tests.js";


export const typesOfTestsController= (req,res) => {
  try{
    const types = typesOfTestsService(req, res);

    res.status(200).json(types);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const sectionsTitlesTestsController = (req, res) => {
  try {
    const arrSections = sectionsTitlesTestsService(req, res);

    const sectionsTitles = arrSections.map(section => ({
      title: section.title,
      slag: section.slag,
    }));

    res.status(200).json(sectionsTitles);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const sectionDefaultTestsController = (req,res) => {
  try{
    const section = sectionTestsService(req, res);

// console.log(section)
    res.status(200).json(section);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}


export const sectionRandomTestsController = (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');

  const randomItems = (array) => {
    const copiedArray = [...array];
    for (let i = copiedArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [copiedArray[i], copiedArray[randomIndex]] = [copiedArray[randomIndex], copiedArray[i]];
    }
    return copiedArray;
  };

  try{
    const data = sectionTestsService(req, res);

    const section = {...data, content: randomItems(data.content)}

    res.status(200).json(section);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export const commonMistakesController = (req,res) => {
  try{
    const data = commonMistakesService(req, res);
// console.log(data)
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export const errorCorrectionController = (req,res) => {
  try{
    const data = errorCorrectionService(req, res);
// console.log(data)
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export const examController = (req,res) => {
  try{
    const data = examService(req, res);
// console.log(data)
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
