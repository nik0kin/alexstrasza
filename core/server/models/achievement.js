var Bookshelf = require('./').Bookshelf;

var Achievement;
var Achievements;

Achievement = Bookshelf.Model.extend({
  tableName: 'achievements',
});

Achievements = Bookshelf.Collection.extend({
  model: Achievement
});

module.exports = {
  Achievement: Achievement,
  Achievements: Achievements
};
