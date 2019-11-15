const express = require("express");
const router = express.Router();
const checkToken = require("../middleware/token");
const promoController = require("../controller/promo");

router.get("/", checkToken.verifyToken, checkToken.checkAuth, async (req, res, next) => {
    await promoController.getPromo(req, res, next);
});


module.exports = router;