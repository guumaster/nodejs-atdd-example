'use strict';

const storageFind = require('../storage/find');

module.exports = () => {
  const criteria = {};

  return storageFind('authors', criteria)
    .then(authorsCursor => {
      return Promise.resolve(authorsCursor.toArray());
    })
    .catch(err => Promise.reject(err));
};
