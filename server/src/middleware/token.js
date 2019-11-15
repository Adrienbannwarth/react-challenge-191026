const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const Promise = require("bluebird");
const jwtVerifyAsync = Promise.promisify(jwt.verify, jwt);
const secret = process.env.JWT_SECRET || "123456789";

module.exports = {
    verifyToken: (req, res, next) => {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== "undefined") {
            req.token = bearerHeader.split(" ")[1];
            next();
        } else {
            next(createError(404));
        }
    },
    checkAuth: async (req, res, next) => {
        try {
            if (req.headers.authorization) {
                const token = req.token;
                const authData = await jwtVerifyAsync(token, secret);
                req.authData = authData;
                next();
            } else {
                next(createError(404));
            }
        } catch (e) {
            next(createError(403));
        }
    },
    isTeacher: (req, res, next) => {
        if (req.authData.role !== "teacher")
            next(createError(404));
        else
            next();
    }
};