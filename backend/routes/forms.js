const express = require('express');
const authenticate = require('../middleware/authenticateSession.js');
const formRouter = express.Router();

formRouter.use(authenticate());

formRouter.post('/create', async (req, res) => {
    return res.send({}) 
});

module.exports = formRouter;