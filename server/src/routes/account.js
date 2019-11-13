const express = require("express");
const router = express.Router();
const sutdentcontroller = require("../controller/student");
const checkToken = require("../middleware/token");
const accountController = require("../controller/account");

router.get("/", checkToken.verifyToken, checkToken.checkAuth ,async (req, res, next) => {
    console.log(req.authData);
    await sutdentcontroller.getMycAccount(req, res, next);
});

router.put("/update", checkToken.verifyToken, checkToken.checkAuth, async (req, res, next) => {
    await accountController.updateAccount(req, res, next);
});
module.exports = router;