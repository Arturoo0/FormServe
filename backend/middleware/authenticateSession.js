const { Session } = require('../models/Session.js');

const authenticate = () => {
    return authenticateSession = async (req, res, next) => {
        try {
            const session = await Session.findOne({
                sessionIdentifier: req.cookies.sessionID
            });  
            if (!session) return res.status(404).send({})
            next();
        } catch (err){
            res.status(500).send({})
        }
    };
}

module.exports = authenticate;