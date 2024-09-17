const express = require('express');
const authenticate = require('../middleware/authenticateSession.js');
const { User } = require('../models/User.js');
const errorMessages = require('../utils/errorMessages.js');

const formRouter = express.Router();
formRouter.use(authenticate());

formRouter.post('/create', async (req, res) => {
    const doc = await User.findOne({ email: req.userEmail });
    const { documents, maxDocuments } = doc;
    if (documents.length > maxDocuments) {
        return res.send(errorMessages.maxDocumentLimitExceeded);
    } else{
        const doc = await User.findOneAndUpdate(
            { email: req.userEmail },
            { $push: { documents: {}}}
        );
    };
    return res.send({});  
});

module.exports = formRouter;