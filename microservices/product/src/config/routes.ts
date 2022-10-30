import {Express, Router} from 'express';

export default async (app: Express): Promise<void> => {
  const router = Router();
  app.use('/', router);
  (await import(`../index`)).default(router);
};
