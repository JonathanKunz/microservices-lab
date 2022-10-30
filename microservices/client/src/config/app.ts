import express from 'express';
import morgan from 'morgan';
import setupRoutest from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
setupRoutest(app);
app.use(morgan('dev'));

export default app;
