// environment/environment.js

const ENV = {
    PORT: process.env.PORT || 3000,
    db_Name : 'cluster0',
    RANDOM_TOKEN_SECRET : 'ABC',
  };
  
  module.exports = ENV;
  