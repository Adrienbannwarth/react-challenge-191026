const mysql = require("promise-mysql");

const connectionInfo = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "asii",
    password: process.env.DB_PASSWORD || "mabite",
    database: process.env.DB_NAME || "asii",
    waitForConnections: true
};

const connection = async () => await mysql.createConnection(connectionInfo);

module.exports = {
    connection: connection
};