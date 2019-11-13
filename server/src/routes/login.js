const express = require("express");
const router = express.Router();
const loginController = require("../controller/login");
router.post("/", async (req, res, next) => {
    await loginController.login(req, res, next);
});

module.exports = router;