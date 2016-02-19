'use strict';
const HTTP = require('http-status-codes');

const authorsCreate = require('./create');

module.exports = (request, response, next) => {
  authorsCreate(request.body)
    .then(author => {
      response.json(HTTP.CREATED, {id: author._id});
      return next();
    }).catch(error => {
    response.json(error.statusCode || HTTP.INTERNAL_SERVER_ERROR, {error});
    return next();
  });
};
