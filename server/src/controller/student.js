const studentModel = require("../model/student");
const createError = require("http-errors");

module.exports = {
    getMycAccount: async (req, res, next) => {
        try {
            const account = await studentModel.getMyAccount(2002);
            if (account.lenght === 0)
                throw e;
            const infoAccount = account[0];
            const infoUser =  {
                firstName: infoAccount.firstName,
                lastName: infoAccount.lastName,
                mail: infoAccount.mail,
            };
            infoUser.skills = account.map((skill) => {
               return {
                   skill: skill.competenceName,
                   mark: skill.mark
               }
            });
            res.status(200).send(infoUser);
        } catch (e) {
            next(createError(500));
        }
    },
    getListOfStudentOfFaculty: async (req, res, next) => {
        try {
            console.log(req.authData.idPromo, req.authData.facultyId);
            const students = await studentModel.getStudentOfFacultyAndPromo(req.authData.infoAccount.idPromo, req.authData.infoAccount.facultyId);
            console.log("sdfDSfdsfds");
            students.forEach((student) => {
                student.promo = "P" + student.promo
            });
            return res.status(200).send(students);
        } catch (e) {
            console.log(e);
            next(createError(500));
        }
    },
    getStudent: async (req, res, next) => {
        try {
            
        } catch (e) {

        }
    }
};