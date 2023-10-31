const path = require("path");
require("dotenv").config();
const DATABASE_URL = "postgres://bamdtxrk:1StGaYMwLeL9ELceJ9Ey3eF7Qc7yR-tr@hansken.db.elephantsql.com/bamdtxrk";

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
