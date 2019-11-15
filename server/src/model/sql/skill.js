const mysql = require("../../helpers/connection");

module.exports = {
    getMainSkill: async (idMainSkill) => {
        let sql = `
            SELECT
                competenceName
            FROM
                skill
            WHERE
                id = ?;
        `;
        try {
            const connection = await mysql.connection()
            const mainSkill = await connection.query(sql, [idMainSkill]);
            connection.end();
            return mainSkill[0];
        } catch (e) {
            throw e;
        }
    }
};