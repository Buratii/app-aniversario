import { Router } from 'express';
import birthdaysRouter from './birthday.routes';

const routes = Router();

routes.use('/birthday', birthdaysRouter);

export default routes;
