import { Router } from 'express';
import azureRoutes from './routes';

export default class azureRouter
{
    constructor()
    {
        this.router = Router();

        this.router.use('/api', new azureRoutes, (req, res, next) => {
            res.locals.status   = (res.locals.status == undefined || null) ? 200 : res.locals.status;
            res.locals.errors   = (res.locals.errors == undefined || null) ? false : res.locals.errors;
            res.locals.error    = (res.locals.error == undefined || null) ? null : res.locals.error;

            return res.status(res.locals.status).send(res.locals).end();
        });

        return this.router;
    }
}