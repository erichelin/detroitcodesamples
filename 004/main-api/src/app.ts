import Hapi = require('hapi');
import {registerServerSingleApiSave} from "./singleApiSave/singleApiSaveRoutes";

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

registerServerSingleApiSave(server);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Welcome to main-api');
    }
});