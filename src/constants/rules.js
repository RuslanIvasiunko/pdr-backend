import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sectionsDir = path.join(__dirname, '../data/rules/sectionsOfRules');

const readSectionFile = (fileName) => {
  const filePath = path.join(sectionsDir, fileName);
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Ошибка при чтении или парсинге файла ${fileName}:`, err);
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
const section8 = readSectionFile('section8.json');
const section9 = readSectionFile('section9.json');
const section10 = readSectionFile('section10.json');
const section11 = readSectionFile('section11.json');
const section12 = readSectionFile('section12.json');
const section13 = readSectionFile('section13.json');
const section14 = readSectionFile('section14.json');
const section15 = readSectionFile('section15.json');
const section16 = readSectionFile('section16.json');
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
const section34 = readSectionFile('section34.json');

let section33_1 = readSectionFile('section33_1.json');
let section33_2 = readSectionFile('section33_2.json');
let section33_3 = readSectionFile('section33_3.json');
let section33_4 = readSectionFile('section33_4.json');
let section33_5 = readSectionFile('section33_5.json');
let section33_6 = readSectionFile('section33_6.json');
let section33_7 = readSectionFile('section33_7.json');

const section33 = {
  slag: 'section33',
  title: '33. Дорожні знаки',
  allSigns: [
    section33_1,
    section33_2,
    section33_3,
    section33_4,
    section33_5,
    section33_6,
    section33_7,
  ]
};

export const sections = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
  section12,
  section13,
  section14,
  section15,
  section16,
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
  section33,
  section33_1,
  section33_2,
  section33_3,
  section33_4,
  section33_5,
  section33_6,
  section33_7,
  section34,
];

