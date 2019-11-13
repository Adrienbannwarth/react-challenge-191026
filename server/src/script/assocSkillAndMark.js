const mysql = require("../helpers/connection");

const getIdStudent = async () => {
    let sql = `
        SELECT
            id
        FROM
            students
    `;
    try {
        const connection = await mysql.connection();
        const student = await connection.query(sql);
        connection.end();
        return student;
    } catch (e) {
        throw e;
    }
};

const assocSillStudentAndMark = async () => {
    const idMark = 7;
    const studentsId = await getIdStudent();
    let sql = `
        INSERT INTO
            assocSkillMarkUser
        SET
            idMark = ?,
            idSkill = ?,
            idStudent = ?;
    `;
    try {
        const connection = await mysql.connection();
        for (let i = 0; i < studentsId.length; i++) {
            console.log(i);
            for (let j = 1; j <= 5; j++) {
            //    console.log(j);
                await connection.query(sql, [idMark, j, studentsId[i].id]);
            }
        }
        connection.end();
        console.log("ok");
        process.exit();
    } catch (e) {
        throw e;
    }
};

assocSillStudentAndMark();