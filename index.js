const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('Listening on 3000');
});
