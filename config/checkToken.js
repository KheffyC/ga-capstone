const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    let token = req.get('Authorization') || req.query.token;
    if(token){
        token = token.replace('Bearer ', '')

        jwt.verify(token, process.env.SECRET, function(err, decoded){
            // if valid token. decoded will be tje tokens entire payload
            // if invalid token, err will be set
            req.user = err ? null : decoded.user;
            req.exp = err ? null : new Date(decoded.exp * 1000)
            return next()
        })
    } else {
        // No token was set
        req.user = null;
        return next()
    }
}