const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");

// Route
const app = express();



app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
    app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use((req, res, next) => {
    next(createError(404));
});

module.exports = app;