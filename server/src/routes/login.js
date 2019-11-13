const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const middleWare = require("../middleware/token");
const loginController = require("../controller/login");
router.post("/", middleWare.checkAuth ,async (req, res, next) => {
    await loginController.login(req, res, next);
});

module.exports = router;