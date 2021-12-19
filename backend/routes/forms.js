const express = require('express');
const formRouter = express.Router();

const { Session } = require('../models/Session.js');

formRouter.post('/create', async (req, res) => {
    const { sessionIdentifier }
    return res.send({}) 
});

module.exports = formRouter;