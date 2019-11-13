const express = require("express");
const router = express.Router();
const sutdentcontroller = require("../controller/student");

router.get("/" /*middle ware to check Token*/, async (req, res, next) => {
    console.log("FDFDFd");
    await sutdentcontroller.getMycAccount(req, res, next);
});

router.put("/" /*middle ware to check Token*/, async (req, res, next) => {

});

router.post("/"/*middle ware to check Token*/, async (req, res, next) => {

});

router.delete("/"/*middle ware to check Token*/, async (req, res, next) => {

});

module.exports = router;