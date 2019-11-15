const mysql = require("promise-mysql");

const connectionInfo = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "user",
    database: process.env.DB_NAME || "react-project",
    waitForConnections: true
};

const connection = async () => await mysql.createConnection(connectionInfo);

module.exports = {
    connection: connection
};