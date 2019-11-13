const mysql = require("../../helpers/connection");

module.exports = {
    getStudent: async (email) => {
        let sql = `
            SELECT
                id,
                mail,
                password,
                firstName,
                lastName
            FROM
                students
            WHERE
                mail = ?;
        `;
        try {
            const connection = await mysql.connection();
            const result = await connection.query(sql, [email]);
            connection.end();
            return result[0];
        } catch (e) {
            throw e;
        }
    },
    getTeacherAccoun: async (email) => {
        let sql = `
            SELECT
                id,
                mail,
                firstName,
                lastName,
                password
            FROM
                teacher
            WHERE
                mail = ?;
        `;
        try {
            const connection = await mysql.connection();
            const result = await connection.query(sql, [email]);
            connection.end();
            return result[0];
        } catch (e) {
            throw e;
        }
    }
};