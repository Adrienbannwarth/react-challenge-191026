const mysql = require("../../helpers/connection");

module.exports = {
    getFaclty: async () => {
        let sql = `
            SELECT
                id,
                name
            FROM
                faculty;
        `;
        try {
            const connection = await mysql.connection();
            const facltys = await connection.query(sql);
            connection.end();
            return facltys;
        } catch (e) {
            throw e;
        }
    }
};