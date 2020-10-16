'use strict';

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://cuppr_admin@localhost/cuppr',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://cuppr_admin@localhost/cuppr_test',
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
};