import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sectionsDir = path.join(__dirname, '../data/tests/sectionsOfTests');
const typesDir = path.join(__dirname, '../data/tests');

const readSectionFile = fileName => {
  const filePath = path.join(sectionsDir, fileName);
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Помилка при читанні або парсингу файлу ${fileName}:`, err);
    return null;
  }
};

const readTypesFile = fileName => {
  const filePath = path.join(typesDir, fileName);
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Помилка при читанні або парсингу файлу ${fileName}:`, err);
    return null;
  }
};

const section1 = readSectionFile('section1.json');
const section2 = readSectionFile('section2.json');
const section3 = readSectionFile('section3.json');
const section4 = readSectionFile('section4.json');
const section5 = readSectionFile('section5.json');
const section6 = readSectionFile('section6.json');
const section7 = readSectionFile('section7.json');
const section8_1 = readSectionFile('section8_1.json');
const section8_2 = readSectionFile('section8_2.json');
const section9 = readSectionFile('section9.json');
const section10 = readSectionFile('section10.json');
const section11 = readSectionFile('section11.json');
const section12 = readSectionFile('section12.json');
const section13 = readSectionFile('section13.json');
const section14 = readSectionFile('section14.json');
const section15 = readSectionFile('section15.json');
const section16_1 = readSectionFile('section16_1.json');
const section16_2 = readSectionFile('section16_2.json');
const section17 = readSectionFile('section17.json');
const section18 = readSectionFile('section18.json');
const section19 = readSectionFile('section19.json');
const section20 = readSectionFile('section20.json');
const section21 = readSectionFile('section21.json');
const section22 = readSectionFile('section22.json');
const section23 = readSectionFile('section23.json');
const section24 = readSectionFile('section24.json');
const section25 = readSectionFile('section25.json');
const section26 = readSectionFile('section26.json');
const section27 = readSectionFile('section27.json');
const section28 = readSectionFile('section28.json');
const section29 = readSectionFile('section29.json');
const section30 = readSectionFile('section30.json');
const section31 = readSectionFile('section31.json');
const section32 = readSectionFile('section32.json');
const section33_1 = readSectionFile('section33_1.json');
const section33_2 = readSectionFile('section33_2.json');
const section33_3 = readSectionFile('section33_3.json');
const section33_4 = readSectionFile('section33_4.json');
const section33_5 = readSectionFile('section33_5.json');
const section33_6 = readSectionFile('section33_6.json');
const section33_7 = readSectionFile('section33_7.json');
const section34 = readSectionFile('section34.json');
const section35 = readSectionFile('section35.json');
const section36 = readSectionFile('section36.json');
const section37 = readSectionFile('section37.json');
const section38 = readSectionFile('section38.json');
const section39 = readSectionFile('section39.json');
const section40 = readSectionFile('section40.json');
const section41 = readSectionFile('section41.json');
const section42 = readSectionFile('section42.json');
const section43 = readSectionFile('section43.json');
const section44 = readSectionFile('section44.json');
const section45 = readSectionFile('section45.json');
const section46 = readSectionFile('section46.json');
const section47 = readSectionFile('section47.json');

export const sectionsOfTests = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8_1,
  section8_2,
  section9,
  section10,
  section11,
  section12,
  section13,
  section14,
  section15,
  section16_1,
  section16_2,
  section17,
  section18,
  section19,
  section20,
  section21,
  section22,
  section23,
  section24,
  section25,
  section26,
  section27,
  section28,
  section29,
  section30,
  section31,
  section32,
  section33_1,
  section33_2,
  section33_3,
  section33_4,
  section33_5,
  section33_6,
  section33_7,
  section34,
  section35,
  section36,
  section37,
  section38,
  section39,
  section40,
  section41,
  section42,
  section43,
  section44,
  section45,
  section46,
  section47,
];

export const typesOfTests = readTypesFile('types.json');
