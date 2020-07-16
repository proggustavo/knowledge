// Update with your config settings.

module.exports = {
 
    client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'postgres',
      password: 'P2a3u0l9'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
