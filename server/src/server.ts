import express, { json } from 'express';
import { routes } from './routes';

const app = express();

app.use(json());
app.use(routes);

app.listen(3001, () => console.log('Server is running!'));
