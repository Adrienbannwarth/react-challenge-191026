const mysql = require("../helpers/connection");

module.exports = {
    getMyAccount: async (idStudent)  => {
        let sql = `
            SELECT
                firstName,
                lastName,
                mail,
                competenceName,
                mark
            FROM
                assocSkillMarkUser asu
            INNER JOIN students s on asu.idStudent = s.id
            INNER JOIN skill s2 on asu.idSkill = s2.id
            INNER JOIN mark m on asu.idMark = m.id
            WHERE idStudent = ?;
        `;
        try {
            const connection = await mysql.connection();
            const account = await connection.query(sql, [idStudent]);
            connection.end();
            return account;
        } catch (e) {
            throw e;
        }
    }
};