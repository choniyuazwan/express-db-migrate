'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/* Promise-based version */
exports.up = function (db) {
  return db.createTable('bootcamp_batch', {
    id: { type: 'int', primaryKey: true },
    description: 'string',
    start_date: 'string',
    finish_date: 'string'
  });
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
