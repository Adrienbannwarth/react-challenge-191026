const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET || "12345679";

module.exports = {
    checkPassword: async (plainTextPassword, password) => {
        try {
            const match = await bcrypt.compare(plainTextPassword, password)
            if (match)
                return true;
            throw "bad login";
        } catch (e) {
            throw e;
        }
    },

    createToken: async (accountData, isStudent = true) => {
        const infoAccount = {
            id: accountData.id,
            role: (isStudent ? "student" : "teacher"),
        };
        if (isStudent) {
            console.log("FSDFDSFSDFDSFDSF");
            infoAccount.idPromo = accountData.promoId;
            infoAccount.facultyId = accountData.idFaculty;
            console.log(infoAccount);
        }
        return await jwt.sign({infoAccount: infoAccount}, jwtSecret)
    },
};