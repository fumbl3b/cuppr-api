'use strict';

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://cuppr_admin@localhost/cuppr',
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
};