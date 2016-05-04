// Set the default environment to be `development`
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// ## Server Loader
// Passes options through the boot process to get a server instance back
var server = require('./server');

function makeLife(options) {
    options = options || {};

    return server(options);
}

module.exports = makeLife;
