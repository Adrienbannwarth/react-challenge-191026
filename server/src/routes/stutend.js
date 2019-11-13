const express = require("express");
const router = express.Router();
const sutdentcontroller = require("../controller/student");
const checkToken = require("../middleware/token");
router.get("/", checkToken.verifyToken, checkToken.checkAuth ,async (req, res, next) => {
    console.log("FSDFDSFDSFDSFDSF");
    console.log(req.authData);
    await sutdentcontroller.getListOfStudentOfFaculty(req, res, next);
    // await sutdentcontroller.getMycAccount(req, res, next);
});

router.put("/" /*middle ware to check Token*/, async (req, res, next) => {

});

router.post("/"/*middle ware to check Token*/, async (req, res, next) => {

});

router.delete("/"/*middle ware to check Token*/, async (req, res, next) => {

});

module.exports = router;