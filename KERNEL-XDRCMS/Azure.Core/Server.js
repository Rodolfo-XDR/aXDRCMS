import ejs from 'ejs';
import express from 'express';
import azureRouter from './router';

export default class azureServer
{
    constructor()
    {
        const app = express();

        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        app.engine('html', ejs.renderFile);
        app.set('view engine', 'html');

        app.use(express.static(__base + '/dist/aXDR'));
        app.use('/assets', express.static(__base + '/assets'));

        app.use(new azureRouter);

        return app;
    }
}