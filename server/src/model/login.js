const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_TOKEN || "12345679";

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
        return await jwt.sign(infoAccount, jwtSecret)
    },
};