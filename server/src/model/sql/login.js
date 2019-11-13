const mysql = require("../../helpers/connection");

module.exports = {
    getStudent: async (email) => {
        let sql = `
            SELECT
                students.id,
                mail,
                password,
                firstName,
                lastName,
                p.id as promoId,
                f.id as idFaculty
            FROM
                students
            INNER JOIN groupPromo gP on students.idGroup = gP.id
            INNER JOIN promo p on gP.idPromo = p.id
            INNER JOIN faculty f on gP.idFaculty = f.id
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
    },

};