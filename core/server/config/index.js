var path = require('path');

// sloppy config
var databasePath = path.resolve(__dirname, '../../..', 'content/data/');

var configs = {
  development: {
    database: {
      client: 'sqlite3',
      connection: {
        filename: databasePath + '/life-dev.db'
      },
      debug: false,
      useNullAsDefault: true,
    },
    server: {
      host: '127.0.0.1',
      port: '1313'
    }
  },
  test: {
    database: {
      client: 'sqlite3',
      connection: {
        filename: databasePath + '/life-test.db'
      },
      debug: false,
      useNullAsDefault: true,
    },
    server: {
      host: '127.0.0.1',
      port: '2468'
    }
  }
};

module.exports = configs[process.env.NODE_ENV];
