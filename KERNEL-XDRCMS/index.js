import http from 'http';
import azureServer from './Azure.Core/Server';

export default class KERNEL
{
    constructor()
    {
        let app = new azureServer();

        let httpServer = http.createServer(app).listen(__config.serverSettings.port.http, __config.serverSettings.ip, () => {
            console.log('[KERNEL-XDRCMS] Running on ' + __config.serverSettings.ip + ':' + __config.serverSettings.port.http);
        });

        httpServer.on('error', (err) => {
            switch(err.code) 
            {
                case "EADDRINUSE":
                case "EACCES":
                    console.error("[KERNEL-XDRCMS]* Port '" + __config.serverSettings.port.http + "' is in use, check if any other application is using it!");
                    break;
                default:
                    console.log(err.code); 
                    break;
            }
        });
    }
}