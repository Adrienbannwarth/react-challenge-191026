const express = require("express");
const router = express.Router();
const falcultyController = require("../controller/faculty");
const checkToken = require("../middleware/token");

router.get("/", checkToken.verifyToken, checkToken.checkAuth, async (req, res, next) => {
   await falcultyController.getFaculty(req, res, next);
});

module.exports = router;
