const mysql = require("../../helpers/connection");

module.exports = {
    getPromo: async () => {
        let sql = `
            SELECT
                id,
                year
            FROM
                promo;
        `;
        try {
            const connection = await mysql.connection();
            const promos = await connection.query(sql);
            connection.end();
            return promos;
        } catch (e) {
            throw e;
        }
    }
};