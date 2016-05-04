var url = require('url');

var ApiRouteBase    = '/projectlife/api/';

function getApiQuery(route) {
  return url.resolve(ApiRouteBase, route);
}

module.exports = {
  getApiQuery: getApiQuery,
};
