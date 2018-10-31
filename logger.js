
function log(req, res, next) {
    console.log('Logging...');
    next();
}

module.exports = log;  //this module exports a single function.