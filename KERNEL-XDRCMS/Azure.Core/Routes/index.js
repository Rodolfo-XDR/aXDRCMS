import { Router } from 'express';

export default class azureRoutes
{
    constructor()
    {
        this.router = Router();

        return this.router;
    }
}