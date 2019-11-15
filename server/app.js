const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");

// Route
const studentRoute = require("./src/routes/stutend");
const loginRoute = require("./src/routes/login");
const accountRoute = require("./src/routes/account");
const promoRoute = require("./src/routes/promo");
const facultyRoute = require("./src/routes/faculty");
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
    app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", '*', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/student", studentRoute);
app.use("/login", loginRoute);
app.use("/account", accountRoute);
app.use("/promo", promoRoute);
app.use("/faculty", facultyRoute);

app.use((req, res, next) => {
    console.log("FDFDFDFDFDDFD");
    next(createError(404));
});

module.exports = app;