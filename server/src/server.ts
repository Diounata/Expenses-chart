import express, { json } from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(routes);

app.listen(3001, () => console.log('Server is running!'));
