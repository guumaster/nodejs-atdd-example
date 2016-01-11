'use strict';

const authorsFind = require('./find.js');

module.exports = (request, response, next) => {
    authorsFind()
        .then(authors => {
            response.json(200, {authors: authors});
            return next();
        }).catch(error => {
            response.json(500, {error: error});
            return next();
        });
};