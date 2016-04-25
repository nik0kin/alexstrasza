var path = require('path');

// sloppy config
var databasePath = path.resolve(__dirname, '../../..', 'content/data/');

var config = {
  database: {
    client: 'sqlite3',
    connection: {
      filename: databasePath + '/life-dev.db'
    },
    debug: false,
    useNullAsDefault: true,

/* postgres
    connection: {
      host     : 'localhost',
      user     : 'drunk',
      password : 'drunk',
      database : 'drunk',
      charset  : 'utf8'
    }
*/
  },
  server: {
    host: '127.0.0.1',
    port: '2368'
  }
};

module.exports = config;
