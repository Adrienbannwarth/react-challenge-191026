const bcrypt = require("bcrypt");
const mysql = require("../helpers/connection");
const faker = require("faker");

/*const students = [
    {
        firstName: faker.user.firstName(),
        lastName: faker.user.la,
        password: "azerty",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut consectetur corporis delectus dolore doloremque eius est expedita laborum modi molestiae molestias natus nisi quaerat, rem reprehenderit tempore voluptas!"
        promo: 1,

    }
];*/

const getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createFakeStudent = async () => {
    const students = [];
    let group = 1;
    const saltRounds = 10;
    const password = "azerty";
    const hashPassword = await bcrypt.hash(password, saltRounds);
    for (let i = 0; i < 1600; i++) {
        if (i % 25 === 0 && i > 0) {
            console.log("NANI");
            group++;
        }

        let student = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: hashPassword,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, at autem consequatur cumque cupiditate eos, est eum exercitationem id iste laudantium molestias mollitia nesciunt nostrum omnis pariatur quisquam quod repellat!",
            idCompetence: getRandomInt(5, 1),
            idGroup: group
        };
        students.push(student);
    }
    console.log("OK");
    return students;
};

const insertStudentInDataBase = async () => {
    let sql = `
        INSERT INTO
            students
        SET
            firstName = ?,
            lastName = ?,
            mail = ?,
            password = ?,
            description = ?,
            idCompetence = ?,
            idGroup = ?;
    `;
    try {
        const students = await createFakeStudent();
        console.log(students[0]);
        const connection = await mysql.connection();
        const insertData = students.map(async (student) => await connection.query(sql, [
            student.firstName,
            student.lastName,
            student.email,
            student.password,
            student.description,
            student.idCompetence,
            student.idGroup
        ]))
        await Promise.all(insertData);
        console.log("ok");
        process.exit(0);
    } catch (e) {
        throw e;
    }

};

insertStudentInDataBase();