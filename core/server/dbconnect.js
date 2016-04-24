// from http://blog.ragingflame.co.za/2014/12/16/building-a-simple-api-with-express-and-bookshelfjs comments

var Bookshelf = null;

var dbConfig = require('./config').database;

module.exports = (function () {
  if (Bookshelf) {
    return Bookshelf;
  }

  var knex = require('knex')(dbConfig);

  Bookshelf = require('bookshelf')(knex);

  return Bookshelf;
})();
