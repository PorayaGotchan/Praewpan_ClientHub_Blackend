const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/', controller.findAllClientHub);
    app.post('/create-ClientHub', controller.createClientHub);
    app.get('/ClientHub/:id', controller.findClientHubById);
    app.put('/update-ClientHub/:id', controller.updateClientHubById);
    app.delete('/delete-ClientHub/:id', controller.deleteClientHubById);
};