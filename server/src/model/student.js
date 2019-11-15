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
    },
    getStudentOfFacultyAndPromo: async (idPromo, idFaculty) => {
        let sql = `
            SELECT
                students.id,
                s.competenceName as mainSkill,
                firstName,
                lastName,
                gP.name as 'group',
                f.name as facultyName,
                p.year as promo
            FROM
                students
                    INNER JOIN groupPromo gP on students.idGroup = gP.id
                    INNER JOIN skill s on students.idCompetence = s.id
                    INNER JOIN faculty f on gP.idFaculty = f.id
                    INNER JOIN promo p on gP.idPromo = p.id
            WHERE
                gP.idFaculty = ?
            AND
                gP.idPromo = ?;
        `;
        try {
            const connection = await mysql.connection();
            const students = await connection.query(sql, [idFaculty, idPromo]);
            connection.end();
            return students
        } catch (e) {
            throw e;
        }
    },
    updateAccount: async (dataAccount, idAccount) => {
        let sql = `
            UPDATE
                students
            SET
                mail = ?,
                firstName = ?,
                lastName = ?,
                idCompetence = ?
            WHERE
                id = ?;
        `;
        try {
            const connection = await mysql.connection();
            const updateAccountData = await connection.query(sql, [
                dataAccount.mail,
                dataAccount.firstName,
                dataAccount.lastName,
                dataAccount.idCompetence,
                idAccount
            ]);
            connection.end();
            return updateAccountData;
        } catch (e) {
            throw e;
        }
    },
    getStudent: async (idStudent) => {
        let sql = `
            SELECT
                st.firstName,
                st.lastName,
                st.mail,
                s.competenceName,
                idMark,
                idSkill,
                m.mark,
                idCompetence
            FROM
                assocSkillMarkUser asm
            INNER JOIN students st on asm.idStudent = st.id
            INNER JOIN skill s on asm.idSkill = s.id
            INNER JOIN mark m on asm.idMark = m.id
            INNER JOIN groupPromo gP on st.idGroup = gP.id
            INNER JOIN promo p on gP.idPromo = p.id
            INNER JOIN faculty f on gP.idFaculty = f.id
            WHERE
                idStudent = ?;
        `;
        try {
            const connection = await mysql.connection();
            const student = await connection.query(sql, [idStudent]);
            connection.end();
            return student;
        } catch (e) {
            throw e;
        }
    }
};