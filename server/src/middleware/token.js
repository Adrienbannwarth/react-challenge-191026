const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const Promise = require("bluebird");
const jwtVerifyAsync = Promise.promisify(jwt.verify, jwt);
const secret = "123456789";

const token = jwt.sign({"coucou": "name"}, secret);



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
        req.headers.authorization = "bearer";
        console.log(token);
        try {
            if (req.headers.authorization) {
                //const token = req.token;
                const authData = await jwtVerifyAsync(token, secret);
                console.log(authData);
                req.authData = authData;
                next();
            } else {
                next(createError(404));
            }
        } catch (e) {
            console.log(e);
            next(createError(500));
        }

    }

};