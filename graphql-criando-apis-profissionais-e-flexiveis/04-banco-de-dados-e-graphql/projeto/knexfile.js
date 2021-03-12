// Update with your config settings.
require('dotenv').config();

module.exports = {
  client: 'mysql',
  // connection: {
  //   database: process.env.DB_DATABASE,
  //   user:     process.env.DB_USER,
  //   password: process.env.DB_PASSWORD
  // },
  connection: {
    database: 'exercicios',
    user:     'root',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
