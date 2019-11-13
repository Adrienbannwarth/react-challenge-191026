const loginSql = require("../model/sql/login");
const loginModel = require("../model/login");
const createError = require("http-errors");

const emailIsValid = (email) => {
    if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        throw "bad login";
};

module.exports = {
    login: async (req, res, next) => {
        try {
            emailIsValid(req.body.email);
            const studentAccount = await loginSql.getStudent(req.body.email);
            const teacherAccount = await loginSql.getTeacherAccoun(req.body.email);
            console.log(studentAccount);
            console.log(teacherAccount);
            if (typeof studentAccount === "undefined" && typeof teacherAccount === "undefined")
                throw "bad login";
            const password = studentAccount ? studentAccount.password : teacherAccount.password;
            await loginModel.checkPassword(req.body.password, password);
            if (studentAccount) {
                delete studentAccount.password;
                studentAccount.role = "student";
                const token = await loginModel.createToken(studentAccount);
                return res.status(200).send({
                    infoAccount: studentAccount,
                    token: token
                })
            }
            if (teacherAccount) {
                delete teacherAccount.password;
                teacherAccount.role = "teacher";
                const token = await loginModel.createToken(teacherAccount, false);
                return res.status(200).send({
                    infoAccount: teacherAccount,
                    token: token
                });
            }
        }
         catch (e) {
            console.log(e);
            if (e === "bad login")
                next(createError(401));
            next(createError(500))
        }
    }
};