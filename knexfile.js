module.exports = {
    client: "sqlite3", //specify the DBMS
    useNullAsDefault: true, // a flag required for SQlite
    connection: {
        filename: "./database/buildweek.db3" //location of the database file
    },
    migrations: {
        directory: "./database/migrations",
    },
    seeds: {
        directory: "./database/seeds",
    },

    // this is needed when using foreign keys
    pool: {
        afterCreate: (conn, done) => {
            // runs after a connection is made to the sqlite engine
            conn.run("PRAGMA foreign_keys = ON", done) // turn on FK enforcement
        },
    },
}