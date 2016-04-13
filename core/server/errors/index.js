var _ = require('lodash');    

var i18n = require('../i18n');

var errors = {};

function isValidErrorStatus(status) {
  return _.isNumber(status) && status >= 400 && status < 600;
}

function getStatusCode(error) {
  if (error.statusCode) {
    return error.statusCode;
  }

  if (error.status && isValidErrorStatus(error.status)) {
    error.statusCode = error.status;
    return error.statusCode;
  }

  if (error.code && isValidErrorStatus(error.code)) {
    error.statusCode = error.code;
    return error.statusCode;
  }

  error.statusCode = 500;
  return error.statusCode;
}

/**
 * ### Format HTTP Errors
 * Converts the error response from the API into a format which can be returned over HTTP
 *
 * @private
 * @param {Array} error
 * @return {{errors: Array, statusCode: number}}
 */
errors.formatHttpErrors = function formatHttpErrors(error) {
  var statusCode = 500,
    errors = [];

  if (!_.isArray(error)) {
    error = [].concat(error);
  }

  _.each(error, function each(errorItem) {
    var errorContent = {};

    // TODO: add logic to set the correct status code
    statusCode = getStatusCode(errorItem);

    errorContent.message = _.isString(errorItem) ? errorItem :
        (_.isObject(errorItem) ? errorItem.message : i18n.t('errors.errors.unknownApiError'));
    errorContent.errorType = errorItem.errorType || 'InternalServerError';
    errors.push(errorContent);
  });

  return {errors: errors, statusCode: statusCode};
};

errors.handleAPIError = function errorHandler(err, req, res, next) {
  var httpErrors = errors.formatHttpErrors(err);
  //errors.logError(err);

  // Send a properly formatted HTTP response containing the errors
  res.status(httpErrors.statusCode).json({errors: httpErrors.errors});
};


module.exports = errors;