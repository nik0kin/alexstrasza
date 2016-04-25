// from http://blog.ragingflame.co.za/2014/12/16/building-a-simple-api-with-express-and-bookshelfjs comments

var lifeBookshelf = null;

var dbConfig = require('./config').database;

module.exports = (function () {
  if (lifeBookshelf) {
    return lifeBookshelf;
  }

  var knex = require('knex')(dbConfig);

  lifeBookshelf = require('bookshelf')(knex);

  // Load the Bookshelf registry plugin, which helps us avoid circular dependencies
  lifeBookshelf.plugin('registry');


  return lifeBookshelf;
})();
