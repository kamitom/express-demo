function tom_authenticate(req, res, next) {
    console.log('Authenticating...');
    next();
}

module.exports.test = tom_authenticate;