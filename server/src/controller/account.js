const studentModel = require("../model/student");
const createError = require("http-errors");
const login = require("../model/login");

module.exports = {
    updateAccount: async (req, res, next) => {
        try {
            const authData = req.authData.infoAccount;
            await studentModel.updateAccount(req.body, authData.id);
            const studentAccount = studentModel.getMyAccount(authData.id);
            const token = await login.createToken(studentAccount);
            res.status(200).send({token: token});
        } catch (e) {
            console.log(e);
            next(createError(500));
        }
    }
};