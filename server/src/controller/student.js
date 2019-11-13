const studentModel = require("../model/student");
const createError = require("http-errors");

module.exports = {
    getMycAccount: async (req, res, next) => {
        try {
            const account = await studentModel.getMyAccount(2002);
            res.status(200).send(account);
        } catch (e) {
            next(createError(500));
        }
    }
};