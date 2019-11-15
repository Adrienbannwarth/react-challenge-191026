const mysql = require("../../helpers/connection");

module.exports = {
    updateMark: async (idMark, idSkill, idStudent) => {
        let sql = `
            UPDATE
                assocSkillMarkUser
            SET
                idMark = ?
            WHERE
                idStudent = ?
            AND
                idSkill = ?;
        `;
        try {
            const connection = await mysql.connection();
            const upadteMark = await connection.query(sql, [idMark, idStudent, idSkill]);
            connection.end();
            return upadteMark[0]
        } catch (e) {
            throw e;
        }
    }
};