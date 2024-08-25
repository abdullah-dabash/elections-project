module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "12345",
      database: "Jordanian-Elections-Project",
    },
    migrations: {
      directory: "./migrations", 
    },
    seeds: {
      directory: "./seeds", 
    },
  },
};
