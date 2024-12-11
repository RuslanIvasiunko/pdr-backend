import express from 'express';
import cors from 'cors';
import router from './routers/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/src', express.static(path.join(projectRoot, 'src')));

app.use(router);

app.listen(5000, () => console.log('Server is running!'));
