import express from 'express';
import ClassController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';


const routes = express.Router();
const classesController = new ClassController();
const connectionsController = new ConnectionController;

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

// routes.get('/users', (request, response) => {
//     console.log(request.body); // Corpo
//     console.log(request.params); // Routes params
//     console.log(request.query) // Query params

//     const users = [
//         { name : 'Caio', age : 25},
//         { name : 'Lucas', age : 27}
//     ]
//     return response.json(users);
// });

export default routes;